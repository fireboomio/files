package <%= it.packageName %>

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
	"custom-go/pkg/wgpb"
)

func init() {
	plugins.RegisterFunction[<%= it.name %>_loginReq, <%= it.name %>_loginRes](<%= it.name %>, wgpb.OperationType_MUTATION)
}

type <%= it.name %>_loginReq struct {
	Username string    `json:"username"`
	Password string    `json:"password"`
	Info     <%= it.name %>_loginInfo `json:"info,omitempty"`
}

type <%= it.name %>_loginInfo struct {
	Code    string `json:"code,omitempty"`
	Captcha string `json:"captcha,omitempty"`
}

type <%= it.name %>_loginRes struct {
	Msg  string `json:"msg"`
	Data string `json:"data"`
}

func <%= it.name %>(hook *base.HookRequest, body *base.OperationBody[<%= it.name %>_loginReq, <%= it.name %>_loginRes]) (*base.OperationBody[<%= it.name %>_loginReq, <%= it.name %>_loginRes], error) {
	if body.Input.Username != "John" || body.Input.Password != "123456" {
		body.Response = &base.OperationBodyResponse[<%= it.name %>_loginRes]{
			Errors: []base.GraphQLError{{Message: "username or password wrong"}},
		}
		return body, nil
	}

	body.Response = &base.OperationBodyResponse[<%= it.name %>_loginRes]{Data: <%= it.name %>_loginRes{Msg: "login success"}}
	return body, nil
}

