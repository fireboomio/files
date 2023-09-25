import { registerMutatingPostAuthentication } from '@fireboom/server'
import { type FireboomRequestContext } from "@/operations";

registerMutatingPostAuthentication((ctx: FireboomRequestContext) => {
	return 'skip'
})