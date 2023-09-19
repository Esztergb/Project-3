import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/react-splide/css";
import RecipeCard from "./RecipeCard";
import { getPopular } from "../utils/API";

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
        <h3 className="font-dancing font-bold text-4xl text-cbrown">
          Popular Picks
        </h3>
      </Title>
      <Wrapper>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3%",
            // speed: 1000,
            // autoplay: {
            // delay: 1000,
            // },
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
                  showFavoriteButton={true}
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
`;

const Wrapper = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;

export default Popular;
