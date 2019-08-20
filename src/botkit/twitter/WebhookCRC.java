package botkit.twitter;


import io.utility.Constants;
import com.ning.http.client.AsyncHttpClient;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.management.openmbean.InvalidKeyException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

/**
 * Servlet implementation class WebhookCRC
 */
@WebServlet("/WebhookCRC")
public class WebhookCRC extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private static final String HMAC = "HmacSHA256";
    private static final String CHARSET = "UTF-8";
    public static final AsyncHttpClient asyncHttpClient = new AsyncHttpClient();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public WebhookCRC() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*String body = IOUtils.toString(request.getInputStream(),"UTF-8");
		
		System.err.println("request === "+body);
		*/
		if (request.getParameterMap().containsKey("crc_token")){
			String crcToken = request.getParameter("crc_token");
			
			String hash = null;

	        try {
	            Mac sha256_HMAC = Mac.getInstance(HMAC);
	            SecretKeySpec secret_key = new SecretKeySpec(Constants.APIKEY.CONSUMERSECRET.getBytes(CHARSET), HMAC);
	            sha256_HMAC.init(secret_key);

	            hash = Base64.getEncoder().encodeToString(sha256_HMAC.doFinal(crcToken.getBytes(CHARSET)));
	        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
	           
	        } catch (UnsupportedEncodingException e) {
	           
	        } catch (java.security.InvalidKeyException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        System.err.println("shail");
	        response.setContentType("application/json");
	       String result = "{\"response_token\": \"sha256="+hash+"\"}";
	       
	        response.getWriter().append(result);
			response.getWriter().flush();
			response.getWriter().close();
	        return ;
			
		}
		
		try {
			String body = IOUtils.toString(request.getInputStream(),"UTF-8");

			asyncHttpClient.preparePost("https://bot.profoundly.me/twitterwebhook")
            .addHeader("Content-Type", "application/json; charset=UTF-8")
            .setBody(body)
            .execute();
            
    return;
		} catch (Exception e) {
			
		}
		response.getWriter().flush();
		response.getWriter().write("");
		response.getWriter().close();
		return;
			
		
    
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
        System.err.println("shail do post");
		doGet(request, response);
		
	}

}
