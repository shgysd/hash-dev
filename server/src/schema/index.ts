import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { UserQuery } from "./queries/UserQuery";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: UserQuery
  }
});

export default new GraphQLSchema({
  query: Query
});
