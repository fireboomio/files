import { registerProxyHandler } from "@fireboom/server";

registerProxyHandler('<%= it.name %>', {
  async handler(req, ctx, reply) {
    reply.code(200).send('ok')
  },
})