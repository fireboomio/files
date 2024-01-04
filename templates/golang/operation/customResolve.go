package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func CustomResolve(hook *base.HookRequest, body generated.<%= it.upperFirst(it.operationName) %>Body) (res generated.<%= it.upperFirst(it.operationName) %>Body, err error) {
	hook.Logger().Info("CustomResolve")
	return body, nil
}
