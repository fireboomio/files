import { OperationType, registerFunctionHandler } from "@fireboom/server";
// if you want to use more controllable subscription, try use PubSub
// import { PubSub } from "graphql-subscriptions";

// const pubsub = new PubSub();

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
  handler: async function* (input, ctx) {
    for (let i = 0; i < 10; i++) {
      yield `Hello ${i}`
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    // if you want to use pubsub
    // do something to trigger publish
    // eg: pubsub.publish('hello', { hello: 'world' })
    // const asyncIterator = pubsub.asyncIterator('hello')
    // try {
    //   while(true) {
    //     const ret = await asyncIterator.next()
    //     if (ret.done) {
    //       break
    //     }
    //     yield ret.value
    //   }
    // } finally {
    //   asyncIterator.return?.()
    // }
  }
})