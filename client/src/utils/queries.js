import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      _id
      recipeCount
      email
      savedRecipes {
        recipeId
        image
        title
      }
      username
    }
  }
`;
