package io.fireboom.global;

import io.fireboom.plugins.GlobalHooks;
import io.fireboom.server.global.OnResponseHookPayload;
import io.fireboom.server.global.OnResponseHookResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class OnOriginResponse extends GlobalHooks implements GlobalHooks.OnOriginResponse {

    @Override
    public OnResponseHookResponse execute(OnResponseHookPayload body) {
        return new OnResponseHookResponse(false, body.getResponse(), false);
    }
}
