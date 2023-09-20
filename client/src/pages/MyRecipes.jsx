import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";
import Auth from "../utils/auth";
import { removeRecipeId } from "../utils/localStorage";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_RECIPE } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

function MyRecipes() {
  const { loading, data } = useQuery(GET_ME);
  const [removeRecipe] = useMutation(REMOVE_RECIPE);
  const userData = data?.me;
  useEffect(() => {
  }, [data, loading, userData]) 

  // create function that accepts the recipe's mongo _id value as param and deletes the recipe from the database
  const handleDeleteRecipe = async (recipeId) => {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // const response = await deleteRecipe(recipeId, token);
      const response = await removeRecipe({
        variables: {
          recipeId: recipeId,
        },
      });

      if (!response) {
        throw new Error("something went wrong!");
      }

      // upon success, remove recipe's id from localStorage
      removeRecipeId(recipeId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <Title>
        <WelcomeMessage>
          Welcome, {userData?.username}!
        </WelcomeMessage>
      </Title>
      <Grid>
        {userData?.savedRecipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.recipeId} // Use recipeId as the key
              image={recipe.image}
              title={recipe.title}
              id={recipe.recipeId}
              onDelete={handleDeleteRecipe}
              showDeleteButton={true} // Use recipeId as the id
            />
          );
        })}
      </Grid>
    </div>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeMessage = styled.h3`
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  font-size: 4rem;
  color: #715a45;
  text-transform: capitalize; /* Apply the text-transform style */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 5%;
`;
export default MyRecipes;
