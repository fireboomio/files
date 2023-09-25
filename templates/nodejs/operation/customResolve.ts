import { registerCustomResolve } from "@fireboom/server";
import { FireboomRequestContext } from "@/operations";

registerCustomResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
  return {
    response: 'custom response'
  }
})