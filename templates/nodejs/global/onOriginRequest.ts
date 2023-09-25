import { registerOnOriginRequest } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerOnOriginRequest<FireboomRequestContext>(async ctx => {
  console.log(ctx)
  return ctx.request
})