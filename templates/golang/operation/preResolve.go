package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func PreResolve(hook *base.HookRequest, body generated.<%= it.name %>Body) (res generated.<%= it.name %>Body, err error) {
	hook.Logger().Info("PreResolve")
	return body, nil
}
