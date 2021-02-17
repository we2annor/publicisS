const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql(
  fs.readFileSync("./schema.graphql", { encoding: "utf-8" })
);
const resolvers = require("./resolvers");
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
apolloServer.applyMiddleware({ app, path: "/graphql" });
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Graphql Server started and running on ${port}`);
});
