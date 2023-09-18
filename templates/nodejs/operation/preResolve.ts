import { registerPreResolve } from "@fireboom/server";

registerPreResolve('<%= it.name %>', async (ctx) => {
  console.log(ctx.input)
})