import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
  query product($id: ID) {
    product(id: $id) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      data {
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

export const GET_ALL_CATEGORIES = gql`
  query {
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
`;
