import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { getSearchedRecipes } from "../api/spoonacular";
import RecipeCard from "../components/RecipeCard";

function Searched() {
  const [searchedRecipies, setSearchedRecipies] = useState([]);
  const params = useParams();

  useEffect(() => {
    // Use the new function to fetch data from the server
    getSearchedRecipes(params.search)
      .then((recipes) => {
        setSearchedRecipies(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipies.map((item) => {
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
  grid-gap: 3rem;
  margin: 5%;
`;

export default Searched;
