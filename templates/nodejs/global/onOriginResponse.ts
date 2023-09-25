import { registerOnOriginResponse } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerOnOriginResponse<FireboomRequestContext>(async ctx => {
  console.log(ctx)
  return ctx.response
})