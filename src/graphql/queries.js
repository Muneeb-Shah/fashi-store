import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query products($gender: String, $category: String) {
    products(
      filters: {
        gender: { name: { eq: $gender } }
        categories: { name: { eq: $category } }
      }
    ) {
      data {
        id
        attributes {
          name
          price
          featureImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_ORDERS = gql`
  query ($currentUserId: ID) {
    orders(filters: { user: { id: { eq: $currentUserId } } }) {
      data {
        id
        attributes {
          status
          createdAt
          order_details
        }
      }
    }
  }
`;
