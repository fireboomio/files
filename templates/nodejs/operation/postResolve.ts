import { registerPostResolve } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerPostResolve<<%= it.operationName %>Input, <%= it.operationName %>ResponseData, FireboomOperationsDefinition>('<%= it.operationPath %>', async ctx => {
	// TODO
  // console.log(ctx.input)
})