package io.fireboom.authentication;

import io.fireboom.plugins.AuthenticationHooks;
import io.fireboom.server.hook.BaseRequestBodyWg;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class PostAuthentication extends AuthenticationHooks implements AuthenticationHooks.PostAuthentication {

    @Override
    public void execute(BaseRequestBodyWg body) {

    }
}
