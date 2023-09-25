import { registerMutatingPostAuthentication } from '@fireboom/server'
import { FireboomRequestContext } from "@/operations";

registerMutatingPostAuthentication((ctx: FireboomRequestContext) => {
	return 'skip'
})