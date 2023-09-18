package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func MockResolve(hook *base.HookRequest, body generated.<%= it.name %>Body) (res generated.<%= it.name %>Body, err error) {
	hook.Logger().Info("MockResolve")
	return body, nil
}
