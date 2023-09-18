import { registerCustomResolve } from "@fireboom/server";

registerCustomResolve('<%= it.name %>', async (ctx) => {
  return {
    response: 'custom response'
  }
})