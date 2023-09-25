import { registerPostUpload } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'
import { <%= it.providerName %>_<%= it.profileName %>ProfileMeta } from '@/models'

registerPostUpload<<%= it.providerName %>_<%= it.profileName %>ProfileMeta, FireboomRequestContext>('<%= it.providerName %>', '<%= it.profileName %>', async (ctx) => {
  // TODO
})