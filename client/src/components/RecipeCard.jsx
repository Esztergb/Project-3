// RecipeCard.js
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiCookingPot } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
// import { AiFillDelete } from 'react-icons/ai'

const Card = ({ image, title, id }) => {
  
  return (
    <CardContainer>
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

        <Button id={id}>
          <FaRegHeart></FaRegHeart>
        </Button>
        {/* <Button id={id}>
          <AiFillDelete></AiFillDelete>
        </Button> */}
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