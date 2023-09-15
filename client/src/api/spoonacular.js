import axios from "axios";

const makeApiRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

export const getSearchedRecipes = async (name) => {
  const url = `/api/spoonacular/search?name=${name}`;
  return makeApiRequest(url);
};

export const getCuisine = async (name) => {
  const url = `/api/spoonacular/cuisine/${name}`;
  return makeApiRequest(url);
};

export const getPopular = async () => {
  const url = `/api/spoonacular/popular`;
  return makeApiRequest(url);
};

export const getVeggie = async () => {
  const url = `/api/spoonacular/vegetarian`;
  return makeApiRequest(url);
};
