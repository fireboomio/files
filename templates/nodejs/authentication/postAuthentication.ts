import { registerPostAuthentication } from '@fireboom/server'

registerPostAuthentication(ctx => {
	return 'skip'
})