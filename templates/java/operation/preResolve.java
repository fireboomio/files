package io.fireboom.operation.<%= it.operationName %>;

import io.fireboom.entity.InternalInput.<%= it.operationName %>InternalInput;
import io.fireboom.entity.ResponseData.<%= it.operationName %>ResponseData;
import io.fireboom.module.InternalRequests;
import io.fireboom.plugins.OperationHooks;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component(value = "operation/<%= it.operationName %>/PreResolve")
public class PreResolve extends OperationHooks<<%= it.operationName %>InternalInput, <%= it.operationName %>ResponseData> {

    @Override
    protected OperationHookBody<<%= it.operationName %>InternalInput, <%= it.operationName %>ResponseData> execute(OperationHookBody<<%= it.operationName %>InternalInput, <%= it.operationName %>ResponseData> body) {
        return body;
    }
}
