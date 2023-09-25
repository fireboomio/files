import { registerMutatingPostResolve } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerMutatingPostResolve<<%= it.name %>Input, <%= it.operationName %>ResponseData, FireboomRequestContext>('<%= it.operationPath %>', async (ctx: FireboomRequestContext) => {
  // console.log(ctx.input)
  return {
    response: { ...ctx.response, custom: 'custom response' }
  }
})