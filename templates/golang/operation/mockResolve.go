package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func MockResolve(hook *base.HookRequest, body generated.<%= it.upperFirst(it.operationName) %>Body) (res generated.<%= it.upperFirst(it.operationName) %>Body, err error) {
	hook.Logger().Info("MockResolve")
	return body, nil
}
