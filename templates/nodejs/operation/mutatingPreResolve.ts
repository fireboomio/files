import { registerMutatingPreResolve } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'
import { <%= it.operationName %>Input } from '@/models'

registerMutatingPreResolve<<%= it.operationName %>Input, FireboomOperationsDefinition>('<%= it.operationPath %>', async ctx => {
  // console.log(ctx.input)
	return {
		input: { ...ctx.input, custom: 'customInput' }
	}
})