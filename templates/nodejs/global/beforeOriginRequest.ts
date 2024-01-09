import { registerBeforeOriginRequest } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'

registerBeforeOriginRequest<FireboomOperationsDefinition>(async ctx => {
  // console.log(ctx)
  return ctx.request
})