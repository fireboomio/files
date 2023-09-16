import { registerCustomResolve } from "@fireboom/server";

registerCustomResolve('<%= it.operationName %>', async (ctx) => {
  return {
    response: 'custom response'
  }
})