import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries"

function MyRecipes() {
    // Use the useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const savedRecipes = data.me.savedRecipes;

  return (
    <div>
      <Title>
        <h3 className="font-dancing font-bold text-4xl text-cbrown">
          Welcome, User!
        </h3>
      </Title>
      <Grid>
        {savedRecipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.recipeId} // Use recipeId as the key
              image={recipe.image}
              title={recipe.title}
              id={recipe.recipeId} // Use recipeId as the id
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
