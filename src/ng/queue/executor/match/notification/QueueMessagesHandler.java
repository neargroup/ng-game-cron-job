package ng.queue.executor.match.notification;

import org.asynchttpclient.AsyncHttpClient;
import org.redisson.api.RedissonClient;

import com.neargroup.queue.MessagesHandler;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class QueueMessagesHandler implements MessagesHandler<String>{
    private static final String DB_URL = "jdbc:mysql://m1.c40vtcybbb0p.us-west-2.rds.amazonaws.com:1893/ng";
    private static final String DB_USER = "iuwesas";
    private static final String DB_PASSWORD = "jnsk(bnji&ji^frbn";

    private final RedissonClient redisClient;
    private final String CHAT_COUNT = "CHAT_COUNT";
    private final String QUERY_PREFIX = "SELECT channelId1, channelId2 FROM UserMatchHistory where matchID=";
    private final String MATCH = "MATCH_";

    private AsyncHttpClient httpClient;
    private String endpoint;

    public QueueMessagesHandler(RedissonClient redisClient,
                                AsyncHttpClient httpClient
                               , String endpoint) {
        this.redisClient = redisClient;
        this.httpClient = httpClient;
        this.endpoint = endpoint;
    }

    private static Connection createConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }

    private static boolean isUserChatting(String matchId) {
        boolean result = false;

        try {
            Connection connection = createConnection();
            ResultSet resultSet = connection.createStatement()
                    .executeQuery("SELECT closingTime FROM UserMatchHistory where matchID=" + matchId);

            while (resultSet.next()) {
                result = resultSet.getString(1) == null;
            }

            if (!connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException ex){
            ex.printStackTrace();
        }

        return result;
    }


    public String process(String message) {

        String[] matchIds = message.split("_");
        Interval currentStage = Interval.BOOTSTRAP;

        if (matchIds.length == 2) {
            currentStage = Interval.valueOf(matchIds[1].toUpperCase());
        }


        try {
            boolean yes = isUserChatting(matchIds[0]);

            if (yes) {
                long lastConversationTimestamp = 0;

                try {
                    lastConversationTimestamp = redisClient.getAtomicLong(MATCH + matchIds[0]).get();
                } catch (NumberFormatException ignored) {
                }
                
                long threshold = System.currentTimeMillis() - TimeUnit.MINUTES.toMillis(currentStage.getThreshold());

                if (lastConversationTimestamp < threshold) {
                    String body = doesUserConverseEnough(currentStage, matchIds[0]) ? "yes" : "noo";

                    body = matchIds[0] + "_" + currentStage.toString() + "_" + body;
                    
                    httpClient.preparePost(this.endpoint)
                            .setBody(body)
                            .execute(new CustomAsyncHandler());


                    Thread.sleep(100);
                }

            } else {
                redisClient.getAtomicLong(MATCH + matchIds[0]).delete();
            }
        } catch (NullPointerException | InterruptedException e) {
            System.exit(0);
        }

        return message;
    }

    private Long getChatCount(String channelId) {
        return redisClient.getAtomicLong(CHAT_COUNT + channelId).get();
    }

    private boolean doesUserConverseEnough(Interval currentStage, String matchId) {
        List<String> users = new ArrayList<>();
        try {
            Connection connection = createConnection();
            ResultSet resultSet = connection.createStatement()
                    .executeQuery(QUERY_PREFIX + matchId);

            while (resultSet.next()) {
                users.add(resultSet.getString(1));
                users.add(resultSet.getString(2));
            }

            if(!connection.isClosed()){
                connection.close();
            }
            return users.stream()
                    .map(this::getChatCount)
                    .filter(x -> x >= currentStage.getCount())
                    .collect(Collectors.toList()).size() == 2;

        } catch (SQLException ex) {
        }

        return false;
    }

	@Override
	public String getQueueName() {
		// TODO Auto-generated method stub
		return null;
	}
}