import { registerMockResolve } from "@fireboom/server";

registerMockResolve('<%= it.operationName %>', async (ctx) => {
  // console.log(ctx.input)
  return {
    response: { data: 'Mocked data' }
  }
})