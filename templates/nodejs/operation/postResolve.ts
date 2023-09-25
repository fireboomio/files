import { registerPreResolve } from "@fireboom/server";
import { FireboomRequestContext } from "@/operations";

registerPreResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
	// TODO
  // console.log(ctx.input)
})