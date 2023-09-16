import { registerPreUpload } from "@fireboom/server";

registerPreUpload('<%= it.providerName %>', '<%= it.profileName %>', async (ctx) => {
  return {
    error: 'xx',
    fileKey: 'ccc'
  }
})