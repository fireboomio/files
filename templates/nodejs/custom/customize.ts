import { FireboomExecutionContext, registerCustomizeGraphQL } from '@fireboom/server'
import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt } from '@fireboom/server/dist/lib/graphql'
import { type FireboomRequestContext } from '@/operations'

// if you want to use more controllable subscription, try use PubSub
// import { PubSub } from "graphql-subscriptions";

// const pubsub = new PubSub();

type BaseContext = {
  hello: string
}

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType<any, BaseContext & FireboomExecutionContext<FireboomRequestContext>>({
    name: "Mutation",
    fields: () => ({
      login: {
        args: {
          name: {
            type: GraphQLString,
          },
        },
        type: GraphQLString,
        resolve: (_root, args, ctx) => {
          return "Logged in!";
        },
      },
      logout: {
        type: GraphQLString,
        resolve: async (_root, _args, ctx) => {
          return "Logged out!";
        },
      },
    }),
  }),
  query: new GraphQLObjectType<any, BaseContext & FireboomExecutionContext<FireboomRequestContext>>({
    name: "Query",
    fields: () => ({
      yourName: {
        type: GraphQLString,
        resolve: async function (_root, _args, ctx) {
          return ctx.hello
        },
      },
    }),
  }),
  subscription: new GraphQLObjectType<any, BaseContext & FireboomExecutionContext<FireboomRequestContext>>({
    name: "Subscription",
    fields: () => ({
      count: {
        type: GraphQLInt,
        args: {
          to: {
            type: GraphQLInt,
          },
        },
        subscribe: async function* (_root, args) {
          for (let count = 1; count <= args.to; count++) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            yield { count };
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
        },
      },
    }),
  }),
})

registerCustomizeGraphQL('<%= it.operationPath %>', {
  enableGraphQLEndpoint: true,
  baseContext: {
    hello: 'hello world'
  },
  schema
})