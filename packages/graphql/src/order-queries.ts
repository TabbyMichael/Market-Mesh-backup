import { gql } from '@apollo/client'

export const GET_ORDERS = gql`
  query GetOrders($status: OrderStatus, $page: Int, $limit: Int) {
    orders(status: $status, page: $page, limit: $limit) {
      items {
        id
        buyer {
          id
          name
          email
        }
        items {
          productId
          sellerId
          quantity
          unitPriceCents
          subtotalCents
        }
        totalCents
        status
        createdAt
      }
      totalCount
      hasNextPage
      hasPreviousPage
    }
  }
`

export const GET_MY_ORDERS = gql`
  query GetMyOrders {
    myOrders {
      id
      items {
        productId
        sellerId
        quantity
        unitPriceCents
        subtotalCents
      }
      totalCents
      status
      createdAt
    }
  }
`

export const GET_ORDER = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      id
      buyer {
        id
        name
        email
      }
      items {
        productId
        sellerId
        quantity
        unitPriceCents
        subtotalCents
      }
      totalCents
      status
      createdAt
    }
  }
`

export const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      totalCents
      status
      createdAt
    }
  }
`

export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($input: UpdateOrderStatusInput!) {
    updateOrderStatus(input: $input) {
      id
      status
    }
  }
`

export const CANCEL_ORDER = gql`
  mutation CancelOrder($id: ID!) {
    cancelOrder(id: $id) {
      id
      status
    }
  }
`
