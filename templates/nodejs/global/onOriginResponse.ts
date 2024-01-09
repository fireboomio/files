import { registerOnOriginResponse } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'

registerOnOriginResponse<FireboomOperationsDefinition>(async ctx => {
  console.log(ctx)
  return ctx.response
})