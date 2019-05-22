package profoundly.game.cron.notification;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;

import ng.queue.executor.match.notification.CustomAsyncHandler;
import redission.cron.main.RedissonCronProvider;

public class Executor {
    private static AsyncHttpClient httpClient = Dsl.asyncHttpClient();

	public static void main(String[] args) {
	    String endpoint = "";

		RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("game_user_noti");
		while (true){
			try {
				
				/*get user data from redis queue*/
				String result1 = (String)r.pollFirst();
                httpClient.preparePost(endpoint)
                .setBody(result1)
                .execute(new CustomAsyncHandler());
				
			} catch (Exception e) {
				// TODO: handle exception
			}

		}
	
	}

}




