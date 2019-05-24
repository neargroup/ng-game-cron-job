package profoundly.game.cron.notification;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;

import ng.queue.executor.match.notification.CustomAsyncHandler;
import redission.cron.main.RedissonCronProvider;

public class Executor {
	private static AsyncHttpClient httpClient = Dsl.asyncHttpClient();

	public String gameNotiExe() {
//		String endpoint = "https://web.neargroup.me/ng/gameUserReminderNoti"; //live url
		String endpoint = "http://localhost:8080/ng-game-cron-job/TestEnd"; //testing url

		new Thread(() -> {
			RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("GameUserCronNoti");
			while (true){
				try {

					System.out.println("Geting redis entry");
					/*get user data from redis queue*/
					String result1 = (String)r.pollFirst();
					httpClient.preparePost(endpoint)
					.setBody(result1)
					.execute(new CustomAsyncHandler());

				} catch (Exception e) {
					 System.exit(0);
				}

			}
		}).start();
		
		return "Cron Job Started";
	}

}




