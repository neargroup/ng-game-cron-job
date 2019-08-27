package botkit.twitter;

import oauth.signpost.commonshttp.CommonsHttpOAuthConsumer;
import oauth.signpost.exception.OAuthCommunicationException;
import oauth.signpost.exception.OAuthExpectationFailedException;
import oauth.signpost.exception.OAuthMessageSignerException;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import io.utility.Constants;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class WebHook {
	
//    private static final String ENV = "ngtest1"; //Testing
//    private static final String WEBHOOK_URL = "https://test.neargroup.me/ng4/WebhookCRC";

    private static final String ENV = "ngprod"; //Live
    private static final String WEBHOOK_URL = "https://akshay.neargroup.me/ng-game-cron-job/WebhookCRC";
    private static final String VERSION = "1.1";
    private static final CloseableHttpClient httpclient = HttpClients.createDefault();
    private static final String ALL_ACCOUNT_ACTIVITIES = "/account_activity/all/";
    private static final String BASE_URL = "https://api.twitter.com/" + VERSION;
    private static final String ACCOUNT_ACTIVITIES_URL = BASE_URL + ALL_ACCOUNT_ACTIVITIES;

    private static void deleteWebhook(String webhookId) {
        HttpDelete httppost =
                new HttpDelete(ACCOUNT_ACTIVITIES_URL + ENV + "/webhooks/" + webhookId + ".json");
        httppost.setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");

        // OAUTH
        CommonsHttpOAuthConsumer consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
        consumer.setTokenWithSecret(Constants.APIKEY.TOKEN, Constants.APIKEY.TOKENSECRET);
        try {
            consumer.sign(httppost);
            HttpResponse response = httpclient.execute(httppost);
        } catch (OAuthMessageSignerException | OAuthExpectationFailedException | OAuthCommunicationException | IOException e) {
            e.printStackTrace();
        }
    }
    
    

    public static void main(String[] args) {
//                deleteWebhook("1093805528868888576");

        addWebHook(WEBHOOK_URL);
    //           getSubscriptionCount();
               addSubscription();

              //  ;
                //System.err.println("fetchUserDetail : "+fetchUserDetail("3019655372"));
                fetchWebhookConfig();
        

        // Execute and get the response
    }

    private static void fetchWebhookConfig() {
        HttpGet httppost =
                new HttpGet(ACCOUNT_ACTIVITIES_URL + ENV + "/webhooks.json");
        httppost.addHeader("authorization", "Bearer " + Constants.APIKEY.TOKEN);

        CommonsHttpOAuthConsumer consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
        //        consumer.setTokenWithSecret(Constant.TOKEN, Constant.TOKENSECRET);
        try {
            consumer.sign(httppost);
            HttpResponse response = httpclient.execute(httppost);
        } catch (IOException | OAuthExpectationFailedException | OAuthMessageSignerException | OAuthCommunicationException e) {
            e.printStackTrace();
        }
    }

    private static String getSubscriptionCount() {
        HttpGet httppost =
                new HttpGet(ACCOUNT_ACTIVITIES_URL + ENV + "/subscriptions/list.json");
        httppost.addHeader("authorization", "Bearer " + Constants.APIKEY.TOKEN);

        CommonsHttpOAuthConsumer consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
        try {
            consumer.sign(httppost);
            HttpResponse response = httpclient.execute(httppost);
        } catch (IOException | OAuthExpectationFailedException | OAuthMessageSignerException | OAuthCommunicationException e) {
            e.printStackTrace();
        }

        return null;
    }

    public static void addWebHook(String webhookURL) {
        HttpPost httppost =
                new HttpPost(ACCOUNT_ACTIVITIES_URL + ENV + "/webhooks.json");
        httppost.setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");

        // Parameters
        List<BasicNameValuePair> parameters = new ArrayList<>();
        parameters.add(new BasicNameValuePair("url", webhookURL));
        try {
            httppost.setEntity(new UrlEncodedFormEntity(parameters, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        // OAUTH
        CommonsHttpOAuthConsumer consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
        consumer.setTokenWithSecret(Constants.APIKEY.TOKEN, Constants.APIKEY.TOKENSECRET);
        try {
            consumer.sign(httppost);
            HttpResponse response = httpclient.execute(httppost);
        } catch (OAuthMessageSignerException | OAuthExpectationFailedException | OAuthCommunicationException | IOException e) {
            e.printStackTrace();
        }
    }

    private static String fetchUserDetail(String userId) {
        HttpGet httppost =
                new HttpGet(BASE_URL + "/users/lookup.json?user_id=" + userId);
        CommonsHttpOAuthConsumer consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
        consumer.setTokenWithSecret(Constants.APIKEY.TOKEN, Constants.APIKEY.TOKENSECRET);
        try {
            consumer.sign(httppost);
            HttpResponse response = httpclient.execute(httppost);
            return IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8);
        } catch (IOException | OAuthExpectationFailedException | OAuthMessageSignerException | OAuthCommunicationException e) {
            e.printStackTrace();
        }

        return null;
    }
    
    private static String addSubscription() {
        HttpPost httppost =
                new HttpPost(ACCOUNT_ACTIVITIES_URL + ENV + "/subscriptions.json");

        CommonsHttpOAuthConsumer consumer = new CommonsHttpOAuthConsumer(Constants.APIKEY.CONSUMERKEY, Constants.APIKEY.CONSUMERSECRET);
        consumer.setTokenWithSecret(Constants.APIKEY.TOKEN, Constants.APIKEY.TOKENSECRET);
        try {
            consumer.sign(httppost);
            httpclient.execute(httppost);

        } catch (IOException | OAuthExpectationFailedException | OAuthMessageSignerException | OAuthCommunicationException e) {
        }

        return null;
    }

    
}
