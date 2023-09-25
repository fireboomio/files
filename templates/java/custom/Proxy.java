package io.fireboom.<%= it.packageName %>;

import io.fireboom.plugins.ProxyHooks;
import io.fireboom.server.global.OnRequestHookPayload;
import io.fireboom.server.global.OnResponseHookResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component(value = "<%= it.packageName %>/<%= it.name %>")
public class <%= it.name %> extends ProxyHooks {

    @Override
    protected OnResponseHookResponse execute(OnRequestHookPayload body) {
        return new OnResponseHookResponse(false, null, false);
    }
}
