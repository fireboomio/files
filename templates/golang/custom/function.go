package <%= it.packageName %>

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
	"custom-go/pkg/wgpb"
)

func init() {
	plugins.RegisterFunction[loginReq, loginRes](<%= it.name %>, wgpb.OperationType_MUTATION)
}

type loginReq struct {
	Username string    `json:"username"`
	Password string    `json:"password"`
	Info     loginInfo `json:"info,omitempty"`
}

type loginInfo struct {
	Code    string `json:"code,omitempty"`
	Captcha string `json:"captcha,omitempty"`
}

type loginRes struct {
	Msg  string `json:"msg"`
	Data string `json:"data"`
}

func <%= it.name %>(hook *base.HookRequest, body *base.OperationBody[loginReq, loginRes]) (*base.OperationBody[loginReq, loginRes], error) {
	if body.Input.Username != "John" || body.Input.Password != "123456" {
		body.Response = &base.OperationBodyResponse[loginRes]{
			Errors: []base.GraphQLError{{Message: "username or password wrong"}},
		}
		return body, nil
	}

	body.Response = &base.OperationBodyResponse[loginRes]{Data: loginRes{Msg: "login success"}}
	return body, nil
}

