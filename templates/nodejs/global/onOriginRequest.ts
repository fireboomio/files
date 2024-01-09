import { registerOnOriginRequest } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'

registerOnOriginRequest<FireboomOperationsDefinition>(async ctx => {
  console.log(ctx)
  return ctx.request
})