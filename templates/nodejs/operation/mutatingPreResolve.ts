import { registerMutatingPreResolve } from "@fireboom/server";

registerMutatingPreResolve('<%= it.operationName %>', async (ctx) => {
  // console.log(ctx.input)
	return {
		input: { ...ctx.input, custom: 'customInput' }
	}
})