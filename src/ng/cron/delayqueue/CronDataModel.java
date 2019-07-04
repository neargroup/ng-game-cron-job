package ng.cron.delayqueue;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
public class CronDataModel {

	@SerializedName("data")
	@Expose
	private String data;
	@SerializedName("delayTime")
	@Expose
	private long delayTime;
	@SerializedName("timeUnit")
	@Expose
	private String timeUnit;
	@SerializedName("queueName")
	@Expose
	private String queueName;

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public long getDelayTime() {
		return delayTime;
	}

	public void setDelayTime(long delayTime) {
		this.delayTime = delayTime;
	}

	public String getTimeUnit() {
		return timeUnit;
	}

	public void setTimeUnit(String timeUnit) {
		this.timeUnit = timeUnit;
	}

	public String getQueueName() {
		return queueName;
	}

	public void setQueueName(String queueName) {
		this.queueName = queueName;
	}

}
