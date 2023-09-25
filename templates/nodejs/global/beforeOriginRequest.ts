import { registerBeforeOriginRequest } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerBeforeOriginRequest<FireboomRequestContext>(async ctx => {
  // console.log(ctx)
  return ctx.request
})