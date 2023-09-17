import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { fetchDetails } from "../utils/API";


   function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState ("instructions");
    let params = useParams();

    useEffect(() => {
      if (params.name) {
        fetchDetails(params.name)
          .then((recipe) => {
            setDetails(recipe);
          })
          .catch((error) => {
            console.error(error);
            // Handle the error here, e.g., show an error message to the user
          });
      }
    }, [params.name]);

  
  return (
    <DetailWrapper className="flex">
      <LeftColumn className="basis-1/3">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </LeftColumn>

      <RightColumn className="basis-2/3">
        <ButtonContainer>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonContainer>
        {activeTab === "instructions" && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li className="text-cbrown" key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </RightColumn>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 4% 15%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .active {
    background: linear-gradient(35deg, #715a45, #3a2e23);
    color: #f7f0d9;
  }
  h2 {
    margin-bottom: 2rem;
    color: #715a45;
    text-align: center;
    font-weight: 600;
    font-size: 25px;
  }
  h4 {
    color: #715a45;
  }
  li {
    font-size: 1rem;
    line-height: 0.3;
  }
  img {
    border-radius: 3%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
 `;

 const LeftColumn = styled.div`
  width: 33.33%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  width: 66.66%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: ${({ smallScreen }) => (smallScreen ? "center" : "flex-start")};
  /* Center the content horizontally on small screens */
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: ${({ smallScreen }) => (smallScreen ? "column" : "row")};
  align-items: ${({ smallScreen }) => (smallScreen ? "center" : "flex-start")};
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #715a45;
  background: #fdfaef;
  /* margin-right: 2rem; */
  margin-bottom: 2rem;
  font-weight: 600;
  transform: scale(0.8);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export default Recipe