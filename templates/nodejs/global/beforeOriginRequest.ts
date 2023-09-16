import { registerBeforeOriginRequest } from '@fireboom/server'

registerBeforeOriginRequest(async (ctx) => {
  // console.log(ctx)
  return ctx.request
})