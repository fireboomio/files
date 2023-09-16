import { registerOnOriginRequest } from '@fireboom/server'

registerOnOriginRequest(async (ctx) => {
  console.log(ctx)
  return ctx.request
})