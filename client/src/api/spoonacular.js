export const getSearchedRecipes = async (name) => {
    try {
      const response = await fetch(`/api/spoonacular/search?name=${name}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      throw new Error(`API request failed: ${error.message}`);
    }
  };
  