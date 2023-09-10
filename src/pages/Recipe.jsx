import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

   function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState ("instructions");
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=74db62d59a674bbc85356ed301f3b3e2`);

        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
      fetchDetails();
    }, [params.name]);
  
  return (
    <DetailWrapper className="flex flex-row">
      <div className="basis-1/3">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <div className="pl-10 basis-2/3">
        
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
          {activeTab === "instructions" && (
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h4>
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
         </div>
    </DetailWrapper>
  );
}



const DetailWrapper = styled.div`
  margin: 4rem 15rem;
 
  /* align-items: center;
  justify-content: center; */
  .active {
    background: linear-gradient(35deg, #715a45, #3a2e23);
    color: #f7f0d9;
  }
  h2 {
    margin-bottom: 2rem;
    color: #715a45;
    text-align: center;
  }
  h4 {
    color: #715a45;
  }
  li {
    font-size: 1.2rem;
    line-height: 0.5;
  }
  ul {
    margin-top: 2rem;
  }
`;

// const Card = styled.div`
//   min-width: 25rem;
//   max-width: 25rem;
//   img {
//     width: 100%;
//     border-radius: 2rem;
//   }
 
// `;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #715a45;
  background: white;
  border: 2px solid #3a2e23;
  margin-right: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export default Recipe