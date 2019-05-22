package profoundly.game.cron.notification;

import io.netty.handler.codec.http.HttpHeaders;
import org.asynchttpclient.AsyncHandler;
import org.asynchttpclient.HttpResponseBodyPart;
import org.asynchttpclient.HttpResponseStatus;

public class CustomAsyncHandler implements AsyncHandler<Integer> {
    private Integer status;

    @Override
    public State onStatusReceived(HttpResponseStatus responseStatus) {
        status = responseStatus.getStatusCode();
        return State.ABORT;
    }

    @Override
    public State onHeadersReceived(HttpHeaders headers) {
        return State.ABORT;
    }

    @Override
    public State onBodyPartReceived(HttpResponseBodyPart bodyPart) {
        return State.ABORT;
    }

    @Override
    public Integer onCompleted() {
        return status;
    }

    @Override
    public void onThrowable(Throwable t) {
    }
}
