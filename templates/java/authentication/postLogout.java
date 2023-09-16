package io.fireboom.authentication;

import io.fireboom.plugins.AuthenticationHooks;
import io.fireboom.server.hook.BaseRequestBodyWg;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class PostLogout extends AuthenticationHooks implements AuthenticationHooks.PostLogout {

    @Override
    public void execute(BaseRequestBodyWg body) {

    }
}
