import { registerCustomResolve } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

// remove '| any' if you want to keep the return type
registerCustomResolve<<%= it.operationName %>Input, <%= it.operationName %>ResponseData | any, FireboomOperationsDefinition>('<%= it.operationPath %>', async ctx => {
  return {
    response: 'custom response'
  }
})