const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Element {
    _id: ID!
    tag: String
    attributes: String
    parentTag: ID
    children: [ID]
    type:String

  }
type Component {
  _id:ID!
  tag:String
  file:String
  style:String
}
type Site {
  _id:ID!
  name:String
  elements:[String]
}
  type Query {
    element(_id: ID!): Element
    children(_id: ID): [Element]
    component(tag: String): Component
    components: [Component]
    getSite(name:String):Site
    sites:[Site]
  }

  type Mutation {
    createSite(name:String!,elements:[String]):Site
    updateSite(name:String!,elements:[String]):Site
    createElement(tag: String!, attributes: String!, parentTag: ID,type:String): Element
    updateElement(_id: ID!, tag: String, attributes: String, children:[String] ,type:String): Element
    deleteElement(_id: ID!): ID
  }
`;

module.exports = typeDefs;
