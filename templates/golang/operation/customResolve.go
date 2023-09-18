package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func CustomResolve(hook *base.HookRequest, body generated.<%= it.name %>Body) (res generated.<%= it.name %>Body, err error) {
	hook.Logger().Info("CustomResolve")
	return body, nil
}
