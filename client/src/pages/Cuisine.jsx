import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'; //useParams pulls out keyword from URL
import RecipeButton from "../components/RecipeButton";
import FavButton from "../components/FavButton";
import { getCuisine } from "../api/spoonacular";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCuisine(params.type)
      .then((recipes) => {
        setCuisine(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <div>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </div>

            <Buttons>
              <Link to={"/recipe/" + item.id}>
                <RecipeButton />
              </Link>
              <Link to={"/MyRecipes/"}>
                <FavButton />
              </Link>
            </Buttons>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin: 5rem;
   
`
const Card = styled.div`
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
  
`

export default Cuisine