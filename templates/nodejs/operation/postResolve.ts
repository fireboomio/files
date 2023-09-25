import { registerPreResolve } from "@fireboom/server";
import { type FireboomRequestContext } from "@/operations";

registerPreResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
	// TODO
  // console.log(ctx.input)
})