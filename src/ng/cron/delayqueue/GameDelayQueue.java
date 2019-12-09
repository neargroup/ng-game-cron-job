package ng.cron.delayqueue;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

import com.google.gson.Gson;

import io.utility.UserActivity;

/**
 * Servlet implementation class GameDelayQueue
 */
@WebServlet("/GameDelayQueue")
public class GameDelayQueue extends HttpServlet {
	private static final long serialVersionUID = 1L;
	UserActivity userActivity = new UserActivity();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GameDelayQueue() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


		String body=IOUtils.toString(request.getInputStream(),"UTF8");
//		System.out.println("body : "+body);
		String result = "";

		try {
			CronDataModel cronData = new Gson().fromJson(body, CronDataModel.class);

			if(cronData !=null) {

				if(!UserActivity.isContainValue(cronData.getQueueName())) {
					result = "Queue name can't be null or empty";

				} else if(!UserActivity.isContainValue(cronData.getData())) {
					result = "Data should be as string and can't be null or empty";

				} else if(!UserActivity.isContainValue(cronData.getTimeUnit())) {
					result = "TimeUnit should be as string and can't be null or empty";

				} else {

					if (cronData.getTimeUnit().equals("SECONDS") || cronData.getTimeUnit().equals("MINUTES") || cronData.getTimeUnit().equals("HOURS")) {
						result = "Success";
						
//						System.out.println( "Cron Data : " + cronData.getData());

						if(cronData.getTimeUnit().equals("SECONDS")) {
							userActivity.addGameDelayQueueToRedis(cronData.getDelayTime(), TimeUnit.SECONDS, cronData.getData(), cronData.getQueueName());
						} else if(cronData.getTimeUnit().equals("MINUTES")) {
							userActivity.addGameDelayQueueToRedis(cronData.getDelayTime(), TimeUnit.MINUTES, cronData.getData(), cronData.getQueueName());
						} else {
							userActivity.addGameDelayQueueToRedis(cronData.getDelayTime(), TimeUnit.HOURS, cronData.getData(), cronData.getQueueName());
						}
					} else {
						result = "TimeUnit should be SECONDS/MINUTES/HOURS";

					}
				}

			}else {
				result = "Invalid Body";
			}
		} catch (Exception e) {
			result = "Invalid Body";
			e.printStackTrace();
		}
		response.getWriter().append("'result' : '"+result+"'");

	
	}

}
