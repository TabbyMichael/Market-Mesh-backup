export const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    title
    description
    priceCents
    currency
    images
    stock
    createdAt
    seller {
      id
      storeName
    }
    categories {
      id
      name
    }
  }
`;

export const USER_FRAGMENT = `
  fragment UserFields on User {
    id
    name
    email
    role
    createdAt
  }
`;

export const ORDER_FRAGMENT = `
  fragment OrderFields on Order {
    id
    buyer {
      ...UserFields
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
`;
