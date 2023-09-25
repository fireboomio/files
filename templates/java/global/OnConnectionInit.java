package io.fireboom.global;

import io.fireboom.plugins.GlobalHooks;
import io.fireboom.server.global.OnWsConnectionInitHookPayload;
import io.fireboom.server.global.OnWsConnectionInitHookResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class OnConnectionInit extends GlobalHooks implements GlobalHooks.OnConnectionInit {

    @Override
    public OnWsConnectionInitHookResponse execute(OnWsConnectionInitHookPayload body) {
        return new OnWsConnectionInitHookResponse("ok");
    }
}
