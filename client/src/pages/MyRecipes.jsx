import React, { useState } from "react";
import styled from "styled-components";
import RecipeCard from "../components/RecipeCard"

function MyRecipes() {
  // Create state to store saved recipes
  const [savedRecipes, setSavedRecipes] = useState([]);
  return (

    <Grid>
      {savedRecipes.map((item) => {
        return (
          <RecipeCard
            key={item.id}
            image={item.image}
            title={item.title}
            id={item.id}
          />
        );
      })}
    </Grid>
  
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3%;
  margin: 5%;
`;
export default MyRecipes;
