import { gql } from 'graphql-tag';

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
          import: ["@key", "@shareable"])

  type Notification @key(fields: "id") {
    id: ID!
    userId: ID!
    type: NotificationType!
    title: String!
    message: String!
    read: Boolean!
    createdAt: DateTime!
  }

  enum NotificationType {
    ORDER_CONFIRMATION
    ORDER_SHIPPED
    PAYMENT_RECEIVED
    NEW_MESSAGE
  }

  type Query {
    notifications(userId: ID, unreadOnly: Boolean): [Notification!]!
    notification(id: ID!): Notification
  }

  type Mutation {
    markAsRead(id: ID!): Notification!
    markAllAsRead(userId: ID!): [Notification!]!
    sendNotification(input: SendNotificationInput!): Notification!
  }

  input SendNotificationInput {
    userId: ID!
    type: NotificationType!
    title: String!
    message: String!
  }

  scalar DateTime
`;
