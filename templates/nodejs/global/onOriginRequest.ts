import { registerOnOriginRequest } from '@fireboom/server'
import { FireboomRequestContext } from "@/operations";

registerOnOriginRequest(async (ctx: FireboomRequestContext) => {
  console.log(ctx)
  return ctx.request
})