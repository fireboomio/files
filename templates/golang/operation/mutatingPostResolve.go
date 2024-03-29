package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func MutatingPostResolve(hook *base.HookRequest, body generated.<%= it.upperFirst(it.operationName) %>Body) (res generated.<%= it.upperFirst(it.operationName) %>Body, err error) {
	hook.Logger().Info("MutatingPostResolve")
	return body, nil
}
