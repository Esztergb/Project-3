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
    console.log(`userData: ${JSON.stringify(userData)}`);
  }, [data, loading]) 

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
        <h3 className="font-dancing font-bold text-4xl text-cbrown">
          Welcome, {userData?.username}!
        </h3>
      </Title>
      <Grid>
        {userData?.savedRecipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.Id} // Use recipeId as the key
              image={recipe.image}
              title={recipe.title}
              id={recipe.Id} // Use recipeId as the id
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3%;
  margin: 5%;
`;
export default MyRecipes;
