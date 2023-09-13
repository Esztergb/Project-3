import axios from "axios";

export const getSearchedRecipes = async (name) => {
  try {
    const response = await axios.get(`/api/spoonacular/search?name=${name}`);

    // Axios automatically throws an error for non-2xx HTTP responses,
    // so you can simplify the error handling here.

    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};
