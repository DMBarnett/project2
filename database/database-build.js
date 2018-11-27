var db = require("../models");
var recipe = db.recipe;
var ingredient = db.ingredient;

var tableFiller = function (recipe1, ingredientArr) {
  recipe.findOrCreate({
    where: {
      name: recipe1.name,
    },
    defaults: {
      recipeText: recipe1.text,
      spoonacularID: recipe1.spoonID,
      imageLink: recipe1.img
    }
  }).spread((newRecipe, created) => {
    var recipes = newRecipe;
    return recipes;
  }).then(recipes => {
    // add for loop to go through ingredients array and add each ingredient 
    for (var i = 0; ingredientArr.length; i++) {
      ingredient.findOrCreate({
        where: {
          name: ingredientArr[i].name
        },
        defaults: {
          spoonacularID: ingredientArr[i].spoonID,
          imageLink: ingredientArr[i].img
        }
      }).spread((newIngredient, created) => {
        var newIngredientID = newIngredient.get({
          plain: true
        }).id;
        var newIngredientArray = [newIngredient, newIngredientID, created];
        return newIngredientArray;
      }).spread((newIngredient, newIngredientID, createdI) => {
        if (!createdI) {
          // add new ingredient
          console.log(ingredientArr);
          newIngredient.setRecipes(recipes, {
            through: {
              amount: ingredientArr[i].amount,
              unit: ingredientArr[i].unit
            }
          });
        } else {
          // grab ingredient ID and insert into join table 
          newIngredient.setRecipes(recipes, {
            through: {
              ingredientId: newIngredientID,
              amount: ingredientArr[i].amount,
              unit: ngredientArr[i].unit
            }
          });
        }
      });
    }
  });
}

module.exports = tableFiller;