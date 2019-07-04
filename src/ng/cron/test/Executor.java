package ng.cron.test;

import org.apache.commons.lang.StringUtils;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;

import redission.cron.main.RedissonCronProvider;

public class Executor {
	private static AsyncHttpClient httpClient = Dsl.asyncHttpClient();

	public String gameNotiExe() {
		String endpoint = "https://test.neargroup.me/ng/DeclutterQueueListener"; //live url
//		String endpoint = "http://localhost:8080/ng-game-cron-job/TestEnd"; //testing url

		new Thread(() -> {
			RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("declutter_queue2");
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
	
	public static void main(String[] args) {

		String endpoint = "https://test.neargroup.me/ng/DeclutterQueueListener"; //live url
//		String endpoint = "http://localhost:8080/ng-game-cron-job/TestEnd"; //testing url

		new Thread(() -> {
			RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("declutter_queue2");
			while (true){
				try {

					/*get user data from redis queue*/
					String result1 = (String)r.pollFirst();

					if(result1 !=null && StringUtils.isNotBlank(result1)) {
						System.out.println("Data process : "+ result1);

						httpClient.preparePost(endpoint)
						.setBody(result1)
						.execute(new CustomAsyncHandler());
					
					}else {
					}

				} catch (Exception e) {
					 System.exit(0);
				}

			}
		}).start();
			
	}

}




