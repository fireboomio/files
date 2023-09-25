import { registerOnConnectionInit } from '@fireboom/server'
import { type FireboomRequestContext } from "@/operations";

registerOnConnectionInit(async (ctx: FireboomRequestContext) => {
  // TODO
  return {
    payload: 'payload'
  }
})