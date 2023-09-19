const { Schema } = require("mongoose");

const recipeSchema = new Schema({
  // saved recipe id from spoonacular
  recipeId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
});

module.exports = recipeSchema;
