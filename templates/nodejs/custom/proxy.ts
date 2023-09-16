import { registerProxyHandler } from "@fireboom/server";

registerProxyHandler('<%= it.proxyName %>', {
  async handler(req, ctx, reply) {
    reply.code(200).send('ok')
  },
})