import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts($q: String, $categoryId: ID, $page: Int, $limit: Int) {
    products(q: $q, categoryId: $categoryId, page: $page, limit: $limit) {
      items {
        id
        title
        description
        priceCents
        currency
        images
        stock
        seller {
          id
          storeName
        }
        categories {
          id
          name
        }
      }
      totalCount
      hasNextPage
      hasPreviousPage
    }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      description
      priceCents
      currency
      images
      stock
      seller {
        id
        storeName
        bio
      }
      categories {
        id
        name
      }
    }
  }
`

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      title
      description
      priceCents
      currency
      images
      stock
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      title
      description
      priceCents
      currency
      images
      stock
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`
