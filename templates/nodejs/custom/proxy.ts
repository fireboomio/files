import { registerProxyHandler } from "@fireboom/server";
import { FireboomRequestContext } from "@/operations";

registerProxyHandler('<%= it.name %>', {
  async handler(req, ctx: FireboomRequestContext, reply) {
    reply.code(200).send('ok')
  },
})