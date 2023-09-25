import { registerPreUpload } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'
import { <%= it.providerName %>_<%= it.profileName %>ProfileMeta } from '@/models'

registerPreUpload<<%= it.providerName %>_<%= it.profileName %>ProfileMeta, FireboomRequestContext>('<%= it.providerName %>', '<%= it.profileName %>', async (ctx) => {
  return {
    error: 'xx',
    fileKey: 'ccc'
  }
})