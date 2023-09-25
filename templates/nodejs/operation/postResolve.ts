import { registerPreResolve } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'
import { <%= it.operationName %>Input, <%= it.operationName %>ResponseData } from '@/models'

registerPreResolve<<%= it.name %>Input, <%= it.operationName %>ResponseData, FireboomRequestContext>('<%= it.operationPath %>', async (ctx: FireboomRequestContext) => {
	// TODO
  // console.log(ctx.input)
})