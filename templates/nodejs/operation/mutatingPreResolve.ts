import { registerMutatingPreResolve } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'
import { <%= it.operationName %>Input } from '@/models'

registerMutatingPreResolve<<%= it.operationName %>Input, FireboomRequestContext>('<%= it.operationPath %>', async (ctx: FireboomRequestContext) => {
  // console.log(ctx.input)
	return {
		input: { ...ctx.input, custom: 'customInput' }
	}
})