import { registerMockResolve } from "@fireboom/server";

registerMockResolve('<%= it.name %>', async (ctx) => {
  // console.log(ctx.input)
  return {
    response: { data: 'Mocked data' }
  }
})