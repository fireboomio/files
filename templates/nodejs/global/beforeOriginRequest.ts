import { registerBeforeOriginRequest } from '@fireboom/server'
import { FireboomRequestContext } from "@/operations";

registerBeforeOriginRequest(async (ctx: FireboomRequestContext) => {
  // console.log(ctx)
  return ctx.request
})