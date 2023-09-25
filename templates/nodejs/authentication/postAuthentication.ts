import { registerPostAuthentication } from '@fireboom/server'
import { type FireboomRequestContext } from "@/operations";

registerPostAuthentication((ctx): FireboomRequestContext => {
	return 'skip'
})