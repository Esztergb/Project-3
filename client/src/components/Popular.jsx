import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "./RecipeCard";
import { getPopular } from "../api/spoonacular";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
      .then((recipes) => {
        setPopular(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Title>
        <h3>Popular Picks</h3>
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
          {popular.map((item) => {
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

// const Gradient = styled.div`
//   z-index: 3;
//   position: absolute;
//   width: 100%;
//   height: 100;
//   background: linear-gradient(rgba(0, 0, 0, 0)), rgba(0, 0, 0, 0.5);
// `;


export default Popular;
