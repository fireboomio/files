import type { WsTransportHookRequest } from 'generated/fireboom.hooks'
import type { WsTransportOnConnectionInitResponse } from 'fireboom-wundersdk/server'

export default async function onConnectionInit(hook: WsTransportHookRequest): Promise<WsTransportOnConnectionInitResponse> {
  return {
    payload: {
      // your code here
    }
  }
}