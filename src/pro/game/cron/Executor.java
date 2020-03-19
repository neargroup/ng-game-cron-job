package pro.game.cron;

import org.apache.commons.lang.StringUtils;
import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;

import redission.cron.main.GameRedissonCronProvider;

public class Executor {
	private static AsyncHttpClient httpClient = Dsl.asyncHttpClient();

	public String gameNotiExe() {
		String endpoint = "https://botcron.profoundly.me/fb_user_last_notification"; //live url
//		String endpoint = "https://bottest.profoundly.me/fb_user_last_notification"; //Testing URL url


		new Thread(() -> {
			RDeque<String> r = GameRedissonCronProvider.getRedissonClient().getDeque("LastNotificationFB");
			while (true){
				try {

					/*get user data from redis queue*/
					String result1 = (String)r.pollFirst();

					if(result1 !=null && StringUtils.isNotBlank(result1)) {
						
						httpClient.preparePost(endpoint)
						.setBody(result1)
						.execute(new CustomAsyncHandler());
					
					} 

				} catch (Exception e) {
					 System.exit(0);
				}

			}
		}).start();
		
		return "Cron Job Started";
	}

}




