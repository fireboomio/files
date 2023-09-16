package <%= it.packageName %>

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
	"custom-go/pkg/wgpb"
	"net/http"
)

func init() {
	plugins.RegisterProxyHook(<%= it.proxyName %>, wgpb.OperationType_MUTATION)
}

func <%= it.proxyName %>(hook *base.HttpTransportHookRequest, body *plugins.HttpTransportBody) (*base.ClientResponse, error) {
	// do something here ...
	body.Response = &base.ClientResponse{
		StatusCode: http.StatusOK,
	}
	body.Response.OriginBody = []byte("ok")
	return body.Response, nil
}
