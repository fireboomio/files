package <%= it.profileName %>

import (
	"custom-go/generated"
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
)

func PreUpload(request *base.UploadHookRequest, body *plugins.UploadBody[generated.<%= it.upperFirst(it.providerName) %>_<%= it.profileName %>ProfileMeta]) (*base.UploadHookResponse, error) {
	return &base.UploadHookResponse{FileKey: body.File.Name}, nil
}
