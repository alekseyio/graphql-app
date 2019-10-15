const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { connectDb } = require('./connectDb');

const server = new ApolloServer({ typeDefs, resolvers });

connectDb()
  .then(() => console.log('DB connection established'))
  .catch(err => console.log('DB connection error: ', err))
  .then(() => server.listen())
  .then(({ port }) => {
    console.log(`GraphQL server started on port: ${port}`);
  });
