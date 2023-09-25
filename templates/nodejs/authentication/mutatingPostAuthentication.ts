import { registerMutatingPostAuthentication } from '@fireboom/server'
import { type FireboomRequestContext } from '@/operations'

registerMutatingPostAuthentication<FireboomRequestContext>(ctx => {
	return 'skip'
})