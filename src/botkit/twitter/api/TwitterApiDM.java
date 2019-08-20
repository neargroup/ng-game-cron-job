package botkit.twitter.api;

import io.utility.Constants;
import oauth.signpost.commonshttp.CommonsHttpOAuthConsumer;
import org.apache.http.impl.client.HttpClients;


public class TwitterApiDM {
	
	private final CommonsHttpOAuthConsumer consumer;
	private final HttpClient httpClient;
	private String accessToken;
	private String accessTokenSecret;
	
	public TwitterApiDM(String accessToken, String accessTokenSecret) {
		this.accessToken = accessToken;
		this.accessTokenSecret = accessTokenSecret;

		this.consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
		this.httpClient = new HttpClient(HttpClients.createDefault(), consumer);
	}

	public TwitterApiDM withAccessToken(String accessToken) {
		this.accessToken = accessToken;
		return this;
	}

	public TwitterApiDM withAccessTokenSecret(String accessTokenSecret) {
		this.accessTokenSecret = accessTokenSecret;
		return this;
	}

	private String send(String payload) {
		try {
			return httpClient.send(this.accessToken, this.accessTokenSecret, payload);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String sendMessage(String body) {
		return this.send(body);
	}

}
