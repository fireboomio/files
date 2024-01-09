import { registerMockResolve } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerMockResolve<<%= it.operationName %>Input, <%= it.operationName %>ResponseData, FireboomOperationsDefinition>('<%= it.operationPath %>', async ctx => {
  // console.log(ctx.input)
  return {
    response: { data: 'Mocked data' }
  }
})