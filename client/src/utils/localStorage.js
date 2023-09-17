export const getSavedRecipeIds = () => {
  const savedRecipeIds = localStorage.getItem("saved_Recipes")
    ? JSON.parse(localStorage.getItem("saved_Recipes"))
    : [];

  return savedRecipeIds;
};

export const saveRecipeIds = (RecipeIdArr) => {
  if (RecipeIdArr.length) {
    localStorage.setItem("saved_Recipes", JSON.stringify(RecipeIdArr));
  } else {
    localStorage.removeItem("saved_Recipes");
  }
};

export const removeRecipeId = (RecipeId) => {
  const savedRecipeIds = localStorage.getItem("saved_Recipes")
    ? JSON.parse(localStorage.getItem("saved_Recipes"))
    : null;

  if (!savedRecipeIds) {
    return false;
  }

  const updatedSavedRecipeIds = savedRecipeIds?.filter(
    (savedRecipeId) => savedRecipeId !== RecipeId
  );
  localStorage.setItem("saved_Recipes", JSON.stringify(updatedSavedRecipeIds));

  return true;
};
