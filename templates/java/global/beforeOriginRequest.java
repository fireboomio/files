package io.fireboom.global;

import io.fireboom.plugins.GlobalHooks;
import io.fireboom.server.global.OnRequestHookPayload;
import io.fireboom.server.global.OnRequestHookResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class BeforeOriginRequest extends GlobalHooks implements GlobalHooks.BeforeOriginRequest {

    @Override
    public OnRequestHookResponse execute(OnRequestHookPayload body) {
        return new OnRequestHookResponse(false, body.getRequest(), false);
    }
}
