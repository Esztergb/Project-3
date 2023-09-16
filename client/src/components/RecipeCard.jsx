import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RecipeButton from "./RecipeButton";
import FavButton from "./FavButton";

const Card = ({ image, title, id }) => {
  const [savedRecipes, setSavedRecipes] = useState([]); // State to store saved recipes

  const handleSaveRecipe = (recipe, isSaved) => {
    if (isSaved) {
      setSavedRecipes([...savedRecipes, recipe]);
    } else {
      // Remove the recipe from savedRecipes
      const updatedRecipes = savedRecipes.filter((r) => r.id !== recipe.id);
      setSavedRecipes(updatedRecipes);
    }
  };
  return (
    <CardContainer>
      <div>
        <img src={image} alt="" />
        <h4>{title}</h4>
      </div>
      <Buttons>
        <Link to={`/recipe/${id}`}>
          <RecipeButton />
        </Link>
        <FavButton
          id={id}
          image={image}
          title={title}
          onSave={handleSaveRecipe}
        />
      </Buttons>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  min-height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

export default Card;
