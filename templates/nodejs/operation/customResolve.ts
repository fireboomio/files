import { registerCustomResolve } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerCustomResolve<<%= it.name %>Input, <%= it.operationName %>ResponseData, FireboomRequestContext>('<%= it.operationPath %>', async (ctx: FireboomRequestContext) => {
  return {
    response: 'custom response'
  }
})