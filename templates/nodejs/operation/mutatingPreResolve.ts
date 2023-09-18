import { registerMutatingPreResolve } from "@fireboom/server";

registerMutatingPreResolve('<%= it.name %>', async (ctx) => {
  // console.log(ctx.input)
	return {
		input: { ...ctx.input, custom: 'customInput' }
	}
})