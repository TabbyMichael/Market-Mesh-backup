import { gql } from '@apollo/client'

export const GET_NOTIFICATIONS = gql`
  query GetNotifications($userId: ID, $unreadOnly: Boolean) {
    notifications(userId: $userId, unreadOnly: $unreadOnly) {
      id
      userId
      type
      title
      message
      read
      createdAt
    }
  }
`

export const GET_NOTIFICATION = gql`
  query GetNotification($id: ID!) {
    notification(id: $id) {
      id
      userId
      type
      title
      message
      read
      createdAt
    }
  }
`

export const MARK_AS_READ = gql`
  mutation MarkAsRead($id: ID!) {
    markAsRead(id: $id) {
      id
      read
    }
  }
`

export const MARK_ALL_AS_READ = gql`
  mutation MarkAllAsRead($userId: ID!) {
    markAllAsRead(userId: $userId) {
      id
      read
    }
  }
`

export const SEND_NOTIFICATION = gql`
  mutation SendNotification($input: SendNotificationInput!) {
    sendNotification(input: $input) {
      id
      userId
      type
      title
      message
      read
      createdAt
    }
  }
`
