import { registerOnConnectionInit } from '@fireboom/server'
import { type FireboomOperationsDefinition } from '@/operations'

registerOnConnectionInit<FireboomOperationsDefinition>(async ctx => {
  // TODO
  return {
    payload: 'payload'
  }
})