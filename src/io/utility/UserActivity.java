package io.utility;

import java.util.concurrent.TimeUnit;

import org.redisson.api.RDelayedQueue;
import org.redisson.api.RQueue;

import redission.cron.main.RedissonCronProvider;

public class UserActivity {
	
	
	public static boolean isContainValue(String value){
		return value != null && !(value.isEmpty() || value.equalsIgnoreCase("") || value.equalsIgnoreCase("null"));
	}
	
	public String addDelayQueueToRedis(long time,TimeUnit timeUnit, String jsonData, String queueName) {
		try {
			RQueue<Object> queue = RedissonCronProvider.getRedissonClient().getQueue(queueName);
			RDelayedQueue<Object> delayedQueue = RedissonCronProvider.getRedissonClient().getDelayedQueue(queue);
			delayedQueue.offerAsync(jsonData, time, timeUnit);
			return jsonData;
		} catch (Exception e) {
			return "";
		}
	}

}
