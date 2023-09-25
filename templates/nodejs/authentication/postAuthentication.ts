import { registerPostAuthentication } from '@fireboom/server'
import { FireboomRequestContext } from "@/operations";

registerPostAuthentication((ctx): FireboomRequestContext => {
	return 'skip'
})