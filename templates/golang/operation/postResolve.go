package <%= it.packageName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func PostResolve(hook *base.HookRequest, body generated.<%= it.name %>Body) (res generated.<%= it.name %>Body, err error) {
	hook.Logger().Info("PostResolve")
    // 内部调用示例：
    // userinfo, err := plugins.ExecuteInternalRequestQueries[getUserI, getUserO](hook.InternalClient, generated.System__User__GetOne, getUserI{
	// 				Name:  loginReq.Username,
	// 				Phone: loginReq.Phone,
	// 	})
	// if err != nil {
	// 	hook.Logger().Errorf(err.Error())
    // }
	return body, nil
}
