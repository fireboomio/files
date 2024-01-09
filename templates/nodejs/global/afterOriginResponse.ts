import { registerAfterOriginRequest } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'

registerAfterOriginRequest<FireboomOperationsDefinition>(async ctx => {
  // console.log(ctx)
  return ctx.response
})