package botkit.twitter.api;

import oauth.signpost.commonshttp.CommonsHttpOAuthConsumer;
import oauth.signpost.exception.OAuthCommunicationException;
import oauth.signpost.exception.OAuthExpectationFailedException;
import oauth.signpost.exception.OAuthMessageSignerException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.Closeable;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import java.util.UUID;
import java.util.logging.Logger;

public class HttpClient {
	final Logger logger = Logger.getLogger(HttpClient.class.getName());

    private final CloseableHttpClient httpClient;
    private final CommonsHttpOAuthConsumer consumer;
    private final HttpPost httppost;

    private String twitterUploadUrl = "https://upload.twitter.com/1.1/media/upload.json";

    public HttpClient(CloseableHttpClient httpClient, CommonsHttpOAuthConsumer consumer) {
        this.httpClient = httpClient;
        this.consumer = consumer;
        this.httppost = new HttpPost("https://api.twitter.com/1.1/direct_messages/events/new.json");
    }

    public String send(String token, String tokenSecret, String payload) {
        String responseText = null;
        consumer.setTokenWithSecret(token, tokenSecret);

        try {
            HttpEntity entity = new ByteArrayEntity(payload.getBytes(StandardCharsets.UTF_8));
            httppost.setEntity(entity);
            consumer.sign(httppost);

            CloseableHttpResponse response = httpClient.execute(httppost);
            responseText = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8);
            response.close();
            logger.info("Payload has been successfully send: " + payload);
        } catch (IOException | OAuthExpectationFailedException | OAuthMessageSignerException | OAuthCommunicationException e) {
           
        	logger.warning("Payload has been successfully send: " + e);

        }

        return responseText;
    }
    
    public String getTwitterMedia(String token, String tokenSecret,String url,String channelId){
    	HttpGet mediaGet = new HttpGet(url);
        consumer.setTokenWithSecret(token, tokenSecret);
        String result = "";
		HttpPost httpPost = new HttpPost("https://face.neargroup.me/fileUpload");
        try {
            consumer.sign(mediaGet);
			CloseableHttpResponse response = httpClient.execute(mediaGet);
			UUID uuid = UUID.randomUUID();
			String randomUUIDString = uuid.toString();
			File targetFile = new File("/tmp/"+randomUUIDString);
			FileUtils.copyInputStreamToFile(response.getEntity().getContent(), targetFile);
			MultipartEntityBuilder builder = MultipartEntityBuilder.create();
			//builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
			builder.addPart("file", new FileBody(targetFile));
			builder.addPart("bucket", new StringBody("ng-image", ContentType.MULTIPART_FORM_DATA));
			builder.addPart("key", new StringBody(channelId, ContentType.MULTIPART_FORM_DATA));
			HttpEntity entity = builder.build();
			httpPost.setEntity(entity);
			HttpResponse response1 = (HttpResponse) httpClient.execute(httpPost);
			String getRes = IOUtils.toString(response1.getEntity().getContent());
			try {
				JSONObject body = new JSONObject(getRes);
				if(body.has("error")){
					result = body.getString("error"); 
				}else{
					result = "success";
				}

			} catch (JSONException e) {
				// TODO Auto-generated catch block
				result = "fail";
				e.printStackTrace();
			}
			response.close();
			((Closeable) response1).close();
			targetFile.delete();

		} catch (IOException e) {
			result = "fail";
			e.printStackTrace();
		} catch (OAuthMessageSignerException e1) {
			// TODO Auto-generated catch block
			result = "fail";
			e1.printStackTrace();
		} catch (OAuthExpectationFailedException e1) {
			// TODO Auto-generated catch block
			result = "fail";
			e1.printStackTrace();
		} catch (OAuthCommunicationException e1) {
			// TODO Auto-generated catch block
			result = "fail";
			e1.printStackTrace();
		}


		return result;
    
    }

}
