import { registerProxyHandler } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerProxyHandler('<%= it.operationPath %>', {
  async handler(req, ctx: FireboomRequestContext, reply) {
    reply.code(200).send('ok')
  },
})