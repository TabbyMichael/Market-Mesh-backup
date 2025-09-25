import { gql } from 'graphql-tag';

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
          import: ["@key", "@shareable"])

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
    user(id: ID!): User
    me: User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    login(input: LoginInput!): AuthPayload!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    role: Role!
  }

  input UpdateUserInput {
    name: String
    email: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  scalar DateTime
`;
