import { registerMutatingPostResolve } from "@fireboom/server";

registerMutatingPostResolve('<%= it.name %>', async (ctx) => {
  // console.log(ctx.input)
  return {
    response: { ...ctx.response, custom: 'custom response' }
  }
})