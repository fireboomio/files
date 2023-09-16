import { registerPreResolve } from "@fireboom/server";

registerPreResolve('<%= it.operationName %>', async (ctx) => {
  console.log(ctx.input)
})