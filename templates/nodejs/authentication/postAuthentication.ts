import { registerPostAuthentication } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerPostAuthentication<FireboomRequestContext>(ctx => {
	return 'skip'
})