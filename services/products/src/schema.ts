import { gql } from 'graphql-tag';

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
          import: ["@key", "@shareable"])

  type Product @key(fields: "id") {
    id: ID!
    seller: Seller!
    title: String!
    description: String
    priceCents: Int!
    currency: String!
    images: [String!]!
    stock: Int!
    variants: [Variant!]
    categories: [Category!]
    createdAt: DateTime!
  }

  type Variant {
    id: ID!
    name: String!
    additionalCents: Int
  }

  type Category @key(fields: "id") {
    id: ID!
    name: String!
    slug: String!
  }

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
    products(q: String, categoryId: ID, page: Int, limit: Int): ProductConnection!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(input: UpdateProductInput!): Product!
    deleteProduct(id: ID!): Boolean!
  }

  input CreateProductInput {
    title: String!
    description: String
    priceCents: Int!
    currency: String!
    images: [String!]!
    stock: Int!
    categoryIds: [ID!]!
  }

  input UpdateProductInput {
    id: ID!
    title: String
    description: String
    priceCents: Int
    currency: String
    images: [String!]
    stock: Int
    categoryIds: [ID!]
  }

  type ProductConnection {
    items: [Product!]!
    totalCount: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  scalar DateTime
`;
