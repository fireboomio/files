import { registerCustomResolve } from "@fireboom/server";
import { type FireboomRequestContext } from "@/operations";

registerCustomResolve('<%= it.name %>', async (ctx: FireboomRequestContext) => {
  return {
    response: 'custom response'
  }
})