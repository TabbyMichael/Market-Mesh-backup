import { ApolloGateway, IntrospectAndCompose } from '@apollo/federation';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';

dotenv.config();

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'users', url: process.env.USERS_SERVICE_URL || 'http://localhost:4001' },
      { name: 'products', url: process.env.PRODUCTS_SERVICE_URL || 'http://localhost:4002' },
      { name: 'orders', url: process.env.ORDERS_SERVICE_URL || 'http://localhost:4003' },
      { name: 'payments', url: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:4004' },
      { name: 'notifications', url: process.env.NOTIFICATIONS_SERVICE_URL || 'http://localhost:4005' },
      { name: 'uploads', url: process.env.UPLOADS_SERVICE_URL || 'http://localhost:4006' },
    ],
  }),
});

const server = new ApolloServer({ gateway });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Gateway ready at ${url}`);
