import { OperationType, registerFunctionHandler } from "@fireboom/server";

registerFunctionHandler('<%= it.name %>', {
  input: {
    type: 'object',
    properties: {
      "name": {
        type: 'string'
      }
    },
    additionalProperties: false
  },
  response: {
    type: 'string'
  },
  operationType: OperationType.SUBSCRIPTION,
  handler: async function* (request, ctx) {
    for (let i = 0; i < 10; i++) {
      yield `Hello ${i}`
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }
})