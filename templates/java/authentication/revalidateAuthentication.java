package io.fireboom.authentication;

import io.fireboom.plugins.AuthenticationHooks;
import io.fireboom.server.authentication.MutatingPostAuthenticationResponse;
import io.fireboom.server.hook.BaseRequestBodyWg;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RevalidateAuthentication extends AuthenticationHooks implements AuthenticationHooks.RevalidateAuthentication {

    @Override
    public MutatingPostAuthenticationResponse execute(BaseRequestBodyWg body) {
        return new MutatingPostAuthenticationResponse(null, "ok", body.getUser());
    }
}
