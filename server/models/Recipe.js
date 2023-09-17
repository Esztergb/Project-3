const { Schema } = require("mongoose");

const recipeSchema = new Schema({
  recipe: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
});

module.exports = recipeSchema;
