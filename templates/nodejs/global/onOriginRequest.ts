import { registerOnOriginRequest } from '@fireboom/server'
import { type FireboomRequestContext } from "@/operations";

registerOnOriginRequest(async (ctx: FireboomRequestContext) => {
  console.log(ctx)
  return ctx.request
})