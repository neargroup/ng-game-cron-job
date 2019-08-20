package botkit.twitter.api;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

import io.utility.Constants;

/**
 * Servlet implementation class TwitterDataSendAPI
 */
@WebServlet("/TwitterDataSendAPI")
public class TwitterDataSendAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TwitterDataSendAPI() {
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
		String body = IOUtils.toString(request.getInputStream(),"UTF-8");
		TwitterApiDM twdm = new TwitterApiDM(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET)
				.withAccessToken(Constants.APIKEY.TOKEN)
				.withAccessTokenSecret(Constants.APIKEY.TOKENSECRET);
		
		twdm.sendMessage(body);
		PrintWriter printWriter;

		printWriter = response.getWriter();
		printWriter.println("200");
		printWriter.flush();
		printWriter.close();
	}

}
