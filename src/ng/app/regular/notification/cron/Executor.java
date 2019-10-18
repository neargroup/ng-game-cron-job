package ng.app.regular.notification.cron;

import org.apache.commons.lang.StringUtils;
import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;

import redission.cron.main.RedissonCronProvider;

public class Executor {
	private static AsyncHttpClient httpClient = Dsl.asyncHttpClient();

	public String gameNotiExe() {
//		String endpoint = "https://ngapp.profoundly.me/queue_regular_notification"; //live url
		String endpoint = "http://ng-app.us-west-2.elasticbeanstalk.com/queue_regular_notification"; //Testing url

		System.out.println("result1 reguler start: ");

		new Thread(() -> {
			RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("regular_notification");
			while (true){
				try {

					/*get user data from redis queue*/
					String result1 = (String)r.pollFirst();

					if(result1 !=null && StringUtils.isNotBlank(result1)) {
//						System.out.println("result1 reguler : "+ result1);
						httpClient.preparePost(endpoint)
						.setBody(result1)
						.execute(new CustomAsyncHandler());
						
					
					} 

				} catch (Exception e) {
					 System.exit(0);
				}

			}
		}).start();
		
		return "Cron Job Started for reguler notification";
	}

}




