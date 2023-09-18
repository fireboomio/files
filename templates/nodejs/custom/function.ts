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
    yield '123'
  }
})