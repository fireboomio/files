package authentication

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
)

func MutatingPostAuthentication(hook *base.AuthenticationHookRequest) (*plugins.AuthenticationResponse, error) {
	return &plugins.AuthenticationResponse{User: hook.User, Status: "ok"}, nil
}
