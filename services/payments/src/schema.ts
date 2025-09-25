import { gql } from 'graphql-tag';

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
          import: ["@key", "@shareable"])

  type Seller @key(fields: "id") {
    id: ID!
    user: User!
    storeName: String!
    bio: String
    payoutAccountId: String
  }

  type User @key(fields: "id") {
    id: ID!
    name: String!
    email: String!
    role: Role!
    createdAt: DateTime!
  }

  enum Role {
    BUYER
    SELLER
    ADMIN
  }

  type Query {
    seller(id: ID!): Seller
  }

  type Mutation {
    createStripeAccount(input: CreateStripeAccountInput!): Seller!
    createPaymentIntent(input: CreatePaymentIntentInput!): PaymentIntent!
    confirmPayment(input: ConfirmPaymentInput!): Payment!
  }

  input CreateStripeAccountInput {
    userId: ID!
    storeName: String!
    email: String!
  }

  input CreatePaymentIntentInput {
    amount: Int!
    currency: String!
    orderId: ID!
  }

  input ConfirmPaymentInput {
    paymentIntentId: ID!
    paymentMethodId: ID!
  }

  type PaymentIntent {
    id: ID!
    clientSecret: String!
    amount: Int!
    currency: String!
  }

  type Payment {
    id: ID!
    amount: Int!
    currency: String!
    status: PaymentStatus!
    orderId: ID!
  }

  enum PaymentStatus {
    PENDING
    SUCCEEDED
    FAILED
    CANCELLED
  }

  scalar DateTime
`;
