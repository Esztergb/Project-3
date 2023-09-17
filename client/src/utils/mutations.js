import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        recipeCount
        savedRecipes {
          recipeId
          image
          title
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        recipeCount
        savedRecipes {
          recipeId
          image
          title
        }
      }
    }
  }
`;

export const SAVE_RECIPE = gql`
  mutation saveRecipe($input: RecipeInput!) {
    saveRecipe(input: $input) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        recipeId
        title
        image
      }
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($recipeId: String!) {
    removeRecipe(recipeId: $recipeId) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        recipeId
        title
        image
      }
    }
  }
`;
