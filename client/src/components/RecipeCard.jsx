// RecipeCard.js
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { getSavedRecipeIds } from "../utils/localStorage"; 
import { useMutation } from "@apollo/client";
import { SAVE_RECIPE, REMOVE_RECIPE } from "../utils/mutations";
import { GiCookingPot } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { AiFillDelete } from 'react-icons/ai'

const Card = ({ image, title, id, showDeleteButton }) => {
  const [isSaved, setIsSaved] = useState(getSavedRecipeIds().includes(id));
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [saveRecipe] = useMutation(SAVE_RECIPE, {
    onError: (error) => {
      console.error(error);
    },
  });

  const [removeRecipe] = useMutation(REMOVE_RECIPE, {
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSaveClick = async () => {
    if (!Auth.loggedIn()) {
      // Check if the user is logged in
      setShowLoginMessage(true);
      return;
    }
    try {
      if (isSaved) {
        // If already saved, remove it from saved recipes
        await removeRecipe({
          variables: {
            recipeId: id.toString(), // Convert id to string
          },
        });
      } else {
        // If not saved, add it to saved recipes
        await saveRecipe({
          variables: {
            input: {
              recipeId: id.toString(), // Convert id to string
              title: title,
              image: image,
            },
          },
        });
      }
      setIsSaved(!isSaved);
    } catch (error) {
      if (error.message.includes("user not found")) {
        // Handle the case where the user is not found
        // This could be a server-side issue
        console.error("User not found:", error);
      } else {
        // Handle other types of errors
        console.error("Error:", error);
      }
    }
  };

  const handleDeleteClick = async () => {
    // Add your delete logic here
    try {
      // Delete the recipe and update the UI accordingly
      // You can use the removeRecipe mutation or any other method you prefer
      // ...
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

 
  return (
    <CardContainer>
      {showLoginMessage && (
        <LoginMessage>Please log in to save recipes.</LoginMessage>
      )}
      <div>
        <img src={image} alt="" />
        <h4>{title}</h4>
      </div>
      <Buttons>
        <Button>
          <Link to={`/recipe/${id}`}>
            <div>
              <GiCookingPot></GiCookingPot>
            </div>
          </Link>
        </Button>

        <Button id={id} onClick={handleSaveClick}>
          <FaRegHeart color={isSaved ? "#e94057" : "#f7f0d9"}></FaRegHeart>
        </Button>

        {showDeleteButton &&
          Auth.loggedIn() && ( // Render the delete button only if the user is logged in
            <Button onClick={handleDeleteClick}>
              <AiFillDelete></AiFillDelete>
            </Button>
          )}
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
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    margin: 0;
    padding-top: 2%;
  }
`;

const LoginMessage = styled.div`
  text-align: center;
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: auto;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.5);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  svg {
    color: #f7f0d9;
    font-size: 3rem;
  }
  &:hover {
    background-color: #f27121; /* Change to your desired hover color */

    svg {
      color: #f7f0d9; /* Change to your desired hover text color */
    }

    h4 {
      color: #f7f0d9; /* Change to your desired hover text color */
    }
  }
 
`;
export default Card;