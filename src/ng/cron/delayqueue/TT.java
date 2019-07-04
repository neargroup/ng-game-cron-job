package ng.cron.delayqueue;

import com.google.gson.Gson;

import io.utility.UserActivity;

public class TT {
	
	public static void main(String[] args) {
		String body = "{\n" + 
				"\"data\":\"dfadfadsfdf\",\n" + 
				"\"timeUnit\": \"seconds\",\n" + 
				"\"queueName\":\"onboarding_queue\"\n" + 
				"}";
		String result = "";
		
		CronDataModel cronData = new Gson().fromJson(body, CronDataModel.class);

		if(cronData !=null) {

			if(!UserActivity.isContainValue(cronData.getQueueName())) {
				result = "Queue name can't be null or empty";

			} else if(!UserActivity.isContainValue(cronData.getData())) {
				result = "Data should be as string and can't be null or empty";

			} else if(!UserActivity.isContainValue(cronData.getTimeUnit())) {
				result = "TimeUnit should be as string and can't be null or empty";

			} else {
				System.out.println(cronData.getDelayTime());
				if (cronData.getTimeUnit().equals("SECONDS") || cronData.getTimeUnit().equals("MINUTES") || cronData.getTimeUnit().equals("HOURS")) {
					result = "Success";
				} else {
					result = "TimeUnit should be SECONDS/MINUTES/HOURS";
				}
			}

		} else {
			result = "body can't be null or empty";
		}
		
		System.out.println(result);
	}

}
