import { registerOnOriginResponse } from '@fireboom/server'
import { FireboomRequestContext } from "@/operations";

registerOnOriginResponse(async (ctx: FireboomRequestContext) => {
  console.log(ctx)
  return ctx.response
})