import React from 'react'
import styled from "styled-components";


function MyRecipes() {
  return (
    <div className="">
      <Grid>
      <CardContainer>
        <div>
          <img src="../public/placeholder.jpg" alt="" />
          <h4>Recipe Title</h4>
        </div>
      </CardContainer>
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 5rem;
`;

const CardContainer = styled.div`
  min-height: 20rem;
  max-height: 25rem;
  max-width: 20rem;
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


export default MyRecipes