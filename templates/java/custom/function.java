package io.fireboom.<%= it.packageName %>;

import io.fireboom.plugins.FunctionHooks;
import io.fireboom.plugins.OperationHooks;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component(value = "<%= it.packageName %>/<%= it.functionName %>")
public class <%= it.functionName %> extends FunctionHooks<Test.Input, Test.Output> {

    @Override
    protected OperationHooks.OperationHookBody<Test.Input, Test.Output> execute(OperationHooks.OperationHookBody<Test.Input, Test.Output> body) {
        return body;
    }

    @Data
    static class Input {
        private String name;
    }

    @Data
    static class Output {
        private String name;
    }
}
