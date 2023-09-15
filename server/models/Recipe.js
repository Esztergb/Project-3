// Subdocument schema , will not be its own model but will be used as a schema for users "savedMeasl array in User,js"

const { Schema } = require('mongoose');


const ingredientsSchema = new Schema ({
    name: {
        type: String
    },
}); 


const recipeSchema = new Schema ({
    recipe: {
        type: String ,
    },
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    ingredients: [ ingredientsSchema ]
});



module.exports = recipeSchema;