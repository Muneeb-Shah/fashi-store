import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(input: { identifier: $username, password: $password }) {
      jwt
      user {
        id
      }
    }
  }
`;

export const REGISTER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation (
    $user: ID
    $status: String
    $order_details: JSON
    $publishedAt: DateTime
  ) {
    createOrder(
      data: {
        user: $user
        status: $status
        order_details: $order_details
        publishedAt: $publishedAt
      }
    ) {
      data {
        attributes {
          user {
            data {
              id
            }
          }
          status
        }
      }
    }
  }
`;
