import { registerCustomResolve } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerCustomResolve<<%= it.operationName %>Input, <%= it.operationName %>ResponseData, FireboomOperationsDefinition>('<%= it.operationPath %>', async ctx => {
  return {
    response: 'custom response'
  }
})