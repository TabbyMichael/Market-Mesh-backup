import { gql } from 'graphql-tag';

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
          import: ["@key", "@shareable"])

  type Query {
    signedUploadUrl(filename: String!, contentType: String!): SignedUrl!
  }

  type Mutation {
    deleteUpload(key: String!): Boolean!
  }

  type SignedUrl {
    uploadUrl: String!
    key: String!
    publicUrl: String!
  }
`;
