import { registerMutatingPostAuthentication } from '@fireboom/server'

registerMutatingPostAuthentication(ctx => {
	return 'skip'
})