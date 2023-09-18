import { FireboomExecutionContext, registerCustomizeGraphQL } from '@fireboom/server'
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from '@fireboom/server/dist/lib/graphql'

type BaseContext = {
  hello: string
}

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType<any, BaseContext & FireboomExecutionContext>({
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
  query: new GraphQLObjectType<any, BaseContext & FireboomExecutionContext>({
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
})

registerCustomizeGraphQL('<%= it.name %>', {
  enableGraphQLEndpoint: true,
  baseContext: {
    hello: 'hello world'
  },
  schema
})