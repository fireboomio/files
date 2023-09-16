import { registerOnOriginResponse } from '@fireboom/server'

registerOnOriginResponse(async (ctx) => {
  console.log(ctx)
  return ctx.response
})