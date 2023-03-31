import { gql } from "@apollo/client";

export const CREATE_SITE = gql`
mutation Mutation($name: String!, $elements: [String]) {
    createSite(name: $name, elements: $elements) {
      name
      elements
    }
  }`
export const UPDATE_SITE = gql`
mutation Mutation($name: String!, $elements: [String]) {
    updateSite(name: $name, elements: $elements) {
      name
      elements
    }
  }`
