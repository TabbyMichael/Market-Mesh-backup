import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/federation';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀 Users service ready at ${url}`);
