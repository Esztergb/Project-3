import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "./RecipeCard";
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
                <RecipeCard
                  image={item.image}
                  title={item.title}
                  id={item.id}
                />
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

export default Veggie;
