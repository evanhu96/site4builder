import { gql } from "@apollo/client";

export const GET_COMPONENT = gql`
  query Component($tag: String) {
    component(tag: $tag) {
      _id
      tag
      style
      file
    }
  }
`;
export const GET_COMPONENTS = gql`
  query Components {
    components {
      tag
      style
    }
  }
`;
export const GET_SITE = gql`
  query Components($name: String) {
    getSite(name: $name) {
      name
      elements
    }
  }
`;
export const GET_SITES = gql`
  query Components{
    getSite {
      name
    }
  }
`;
