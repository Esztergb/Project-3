import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import RecipeButton from "../components/RecipeButton";
import FavButton from "../components/FavButton";
import { getVeggie } from "../api/spoonacular";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  //useEffect automatically imports from React - running the getPupuler function only when the component is mounted
  useEffect(() => {
    getVeggie()
      .then((recipes) => {
        setVeggie(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Title>
        <h3 className="#715a45">Vegetarian Picks</h3>
      </Title>
      <Wrapper>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
            breakpoints: {
              1024: { perPage: 3 },
              767: { perPage: 2 },
              640: { perPage: 1 },
            },
            focus: "center",
            updateOnMove: true,
          }}
        >
          {veggie.map((item) => {
            return (
              <SplideSlide key={item.id}>
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
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 2rem;
    color: #715a45;
  }
`;
const Wrapper = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  `;

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
`;
export default Veggie;
