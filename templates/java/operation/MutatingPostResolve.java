package io.fireboom.operation.<%= it.name %>;

import io.fireboom.entity.InternalInput.<%= it.name %>InternalInput;
import io.fireboom.entity.ResponseData.<%= it.name %>ResponseData;
import io.fireboom.module.InternalRequests;
import io.fireboom.plugins.OperationHooks;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component(value = "operation/<%= it.name %>/MutatingPostResolve")
public class MutatingPostResolve extends OperationHooks<<%= it.name %>InternalInput, <%= it.name %>ResponseData> {

    @Override
    protected OperationHookBody<<%= it.name %>InternalInput, <%= it.name %>ResponseData> execute(OperationHookBody<<%= it.name %>InternalInput, <%= it.name %>ResponseData> body) {
        return body;
    }
}
