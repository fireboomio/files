import { registerOnConnectionInit } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerOnConnectionInit<FireboomRequestContext>(async ctx => {
  // TODO
  return {
    payload: 'payload'
  }
})