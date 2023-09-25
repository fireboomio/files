import { registerMutatingPostResolve } from "@fireboom/server";
import { type FireboomRequestContext } from "@/operations";

registerMutatingPostResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
  // console.log(ctx.input)
  return {
    response: { ...ctx.response, custom: 'custom response' }
  }
})