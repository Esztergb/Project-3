import axios from "axios";

export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// save recipe data for a logged in user
export const saveRecipe = (recipeData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeData),
  });
};

// remove saved recipe data for a logged in user
export const deleteRecipe = (recipeId, token) => {
  return fetch(`/api/users/recipes/${recipeId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

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

export const fetchDetails = async (recipeName) => {
  const url = `/api/spoonacular/recipe/details/${recipeName}/`;
  return makeApiRequest(url);
};
