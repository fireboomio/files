import { registerPreResolve } from "@fireboom/server";
import { type FireboomRequestContext } from "@/operations";

registerPreResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
  console.log(ctx.input)
})