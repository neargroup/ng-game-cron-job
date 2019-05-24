package ng.queue.executor.match.notification;

import redission.cron.main.RedissonCronProvider;

import org.apache.commons.lang.StringUtils;
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
                	try {
                		String result1 = (String)r.pollFirst();
                		if(result1 !=null && StringUtils.isNotBlank(result1)) {
                			queueMessagesHandler.process(result1);
                		}
					} catch (Exception e) {
						// TODO: handle exception
					}
                	
                }
            } catch (Exception ex) {
                System.exit(0);
            }
        }).start();
        
        return "Match User Cron Job Started";
    }
}