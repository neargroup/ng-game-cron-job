package ng.queue.executor.match.notification;

import redission.cron.main.RedissonCronProvider;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;
import org.redisson.api.RedissonClient;

public class Executor {
    private final static AsyncHttpClient httpClient = Dsl.asyncHttpClient();
    private final static RedissonClient redisClient = RedissonCronProvider.getRedissonClient();


    public String matchUserNotiExe() {
        String ENDPOINT = "https://web.neargroup.me/ng/ChatConnectionReminder";
        String QUEUE_NAME = "ng_match";
        QueueMessagesHandler queueMessagesHandler = new QueueMessagesHandler(redisClient, httpClient, ENDPOINT);
        new Thread(() -> {
          
            RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque(QUEUE_NAME);
            try {
                while (true) {
                	String result1 = (String)r.pollFirst();
                	queueMessagesHandler.process(result1);
                	
                }
            } catch (Exception ex) {
                System.exit(0);
            }
        }).start();
        
        return "Match User Cron Job Started";
    }
}