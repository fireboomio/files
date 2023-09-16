package io.fireboom.storage.<%= it.providerName %>.<%= it.profileName %>;

import io.fireboom.entity.UploadProfile.<%= it.providerName %>_<%= it.profileName %>ProfileMeta;
import io.fireboom.plugins.UploadProfileHooks;
import io.fireboom.server.storage.UploadHookResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component(value = "storage/<%= it.providerName %>/<%= it.profileName %>/PreUpload")
public class PreUpload extends UploadProfileHooks<<%= it.providerName %>_<%= it.profileName %>ProfileMeta> {

    @Override
    protected UploadHookResponse execute(UploadBody<<%= it.providerName %>_<%= it.profileName %>ProfileMeta> body) {
        return new UploadHookResponse(null, body.getFile().getName());
    }
}
