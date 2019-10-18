package ng.bot.cron.onboarding;

import org.apache.commons.lang.StringUtils;
import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Dsl;
import org.redisson.api.RDeque;

import redission.cron.main.RedissonCronProvider;

public class Executor {
	private static AsyncHttpClient httpClient = Dsl.asyncHttpClient();

	public String gameNotiExe() {
		String endpoint = "https://botcron.profoundly.me/onboardingcronjob"; //live url
//		String endpoint = "https://66ee7e8e.ngrok.io/onboardingcronjob"; //testing url

		System.out.println("result1 start");

		new Thread(() -> {
			RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("new_onboarding_queue");
			while (true){
				try {

					/*get user data from redis queue*/
					String result1 = (String)r.pollFirst();

					if(result1 !=null && StringUtils.isNotBlank(result1)) {
						System.out.println("result1 : "+result1);
						
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




