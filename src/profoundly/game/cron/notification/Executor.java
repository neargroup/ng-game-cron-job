package profoundly.game.cron.notification;

import org.redisson.api.RDeque;
import redission.cron.main.RedissonCronProvider;

public class Executor {
	
	public static void main(String[] args) {
		Executor executor = new Executor();
		executor.getRedisEntry();
	}

	public void getRedisEntry() {
		RDeque<String> r = RedissonCronProvider.getRedissonClient().getDeque("game_user_noti");
		while (true){
			try {
				
				/*get user data from redis queue*/
				String result1 = (String)r.pollFirst();
				
			} catch (Exception e) {
				// TODO: handle exception
			}

		}
	}
}




