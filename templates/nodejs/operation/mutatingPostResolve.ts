import { registerMutatingPostResolve } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerMutatingPostResolve<<%= it.operationName %>Input, <%= it.operationName %>ResponseData, FireboomOperationsDefinition>('<%= it.operationPath %>', async ctx => {
  // console.log(ctx.input)
  return {
    response: { ...ctx.response, custom: 'custom response' }
  }
})