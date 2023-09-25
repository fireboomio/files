import { registerMockResolve } from "@fireboom/server";
import { FireboomRequestContext } from "@/operations";

registerMockResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
  // console.log(ctx.input)
  return {
    response: { data: 'Mocked data' }
  }
})