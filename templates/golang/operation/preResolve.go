package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func PreResolve(hook *base.HookRequest, body generated.<%= it.operationName %>Body) (res generated.<%= it.operationName %>Body, err error) {
	hook.Logger().Info("PreResolve")
	return body, nil
}
