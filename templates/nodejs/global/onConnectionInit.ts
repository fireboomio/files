import { registerOnConnectionInit } from '@fireboom/server'
import { FireboomRequestContext } from "@/operations";

registerOnConnectionInit(async (ctx: FireboomRequestContext) => {
  // TODO
  return {
    payload: 'payload'
  }
})