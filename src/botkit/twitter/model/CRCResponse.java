package botkit.twitter.model;

public class CRCResponse {
    private String response_token;

    public CRCResponse(String response_token) {
        this.response_token = response_token;
    }

    public String getResponse_token() {
        return response_token;
    }

    public void setResponse_token(String response_token) {
        this.response_token = response_token;
    }
    
}
