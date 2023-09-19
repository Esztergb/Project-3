const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input RecipeInput {
    title: String!
    recipeId: String!
    image: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    recipeCount: Int
    savedRecipes: [Recipe]
  }

  type Recipe {
    recipeId: ID
    title: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(input: RecipeInput!): User
    removeRecipe(recipeId: String!): User
  }
`;

module.exports = typeDefs;
