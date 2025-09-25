import { gql } from 'graphql-tag';

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
          import: ["@key", "@shareable"])

  type Order @key(fields: "id") {
    id: ID!
    buyer: User!
    items: [OrderItem!]!
    totalCents: Int!
    status: OrderStatus!
    createdAt: DateTime!
  }

  type OrderItem {
    productId: ID!
    sellerId: ID!
    quantity: Int!
    unitPriceCents: Int!
    subtotalCents: Int!
  }

  enum OrderStatus {
    PENDING_PAYMENT
    PAID
    FULFILLED
    CANCELLED
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
    order(id: ID!): Order
    myOrders: [Order!]!
    orders(status: OrderStatus, page: Int, limit: Int): OrderConnection!
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    updateOrderStatus(input: UpdateOrderStatusInput!): Order!
    cancelOrder(id: ID!): Order!
  }

  input CreateOrderInput {
    items: [OrderItemInput!]!
  }

  input OrderItemInput {
    productId: ID!
    quantity: Int!
  }

  input UpdateOrderStatusInput {
    id: ID!
    status: OrderStatus!
  }

  type OrderConnection {
    items: [Order!]!
    totalCount: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  scalar DateTime
`;
