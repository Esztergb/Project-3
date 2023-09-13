export const getSearchedRecipes = async (name
) => {
  try {
    const response = await fetch(`/api/spoonacular/search?name=${name}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

// import axios from "axios";

// export const getSearchedRecipes = async (name) => {
//   try {
//     const response = await axios.get(`/api/spoonacular/search?name=${name}`);

//     // Axios automatically throws an error for non-2xx HTTP responses,
//     // so you can simplify the error handling here.

//     return response.data;
//   } catch (error) {
//     throw new Error(`API request failed: ${error.message}`);
//   }
// };
