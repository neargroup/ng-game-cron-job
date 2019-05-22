package ng.queue.executor.match.notification;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.cloudwatch.AmazonCloudWatch;
import com.amazonaws.services.cloudwatch.AmazonCloudWatchClient;
import com.amazonaws.util.StringUtils;
import com.neargroup.queue.MessagesHandler;

import redission.cron.main.RedissonCronProvider;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RQueue;
import org.redisson.api.RedissonClient;

public class Executor {
    private final static AsyncHttpClient httpClient = Dsl.asyncHttpClient();
    private final static RedissonClient redisClient = RedissonCronProvider.getRedissonClient();


    public static void main(String[] args) {
        String ENDPOINT = "https://web.neargroup.me/ng/ChatConnectionReminder";
        String QUEUE_NAME = "ng_match";

        new Thread(() -> {
            MessagesHandler<String> queueMessagesHandler = new QueueMessagesHandler(redisClient, httpClient,QUEUE_NAME, ENDPOINT);

            RQueue<String> queue = redisClient.getQueue(queueMessagesHandler.getQueueName());

            try {
                while (true) {
                    queue.readAll().stream()
                            .map(queueMessagesHandler::process)
                            .map(queue::remove)
                            .forEach(System.out::println);
                }
            } catch (Exception ex) {
                System.exit(0);
            }
        }).start();
    }
}