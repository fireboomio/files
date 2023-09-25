import { registerMutatingPreResolve } from "@fireboom/server";
import { type FireboomRequestContext } from "@/operations";

registerMutatingPreResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
  // console.log(ctx.input)
	return {
		input: { ...ctx.input, custom: 'customInput' }
	}
})