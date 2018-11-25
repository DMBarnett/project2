var db = require("../models");
var recipe = db.recipe;
var foo = [{
  amount: 10,
  unit: "cups"
}, {
  amount: 5,
  unit: "oz"
}];

console.log(recipe);
console.log(Object.getOwnPropertyNames(recipe));
console.log(recipe.tableAttributes);
var recipe1 = {
  name: "Roasted Red Pepper Hummus",
  recipeText: "Instructions",
  spoonacularID: 965234,
  imageLink: "https://spoonacular.com/recipeImages/965234-556x370.jpg"
};

var ingredient1 = {
  name: "garbanzo beans",
  spoonacularID: 16057,
  imageLink: "https://spoonacular.com/cdn/ingredients_100x100/chickpeas.jpg"
};

recipe.create({
  name: "Roasted Red Pepper Hummus",
  recipeText: "Instructions",
  spoonacularID: 965234,
  imageLink: "https://spoonacular.com/recipeImages/965234-556x370.jpg"
}).then(roastedredpepperhummus => {
  let recipes = [roastedredpepperhummus];
  return recipes;
}).then(recipes => {
  // add for loop to go through ingredients array and add each ingredient 
  db.ingredient.create({
    name: "garbanzo beans",
    spoonacularID: 16057,
    imageLink: "https://spoonacular.com/cdn/ingredients_100x100/chickpeas.jpg"
  }).then(garbanzobeans => {
    console.log(recipes);
    garbanzobeans.setRecipes(recipes, { through: { amount: 10, unit: "cups"}});
  });
});

// db.ingredient.findOrCreate({
//     where: {
//       name: "garbanzo beans"
//     },
//     defaults: {
//       spoonacularID: 16057,
//       imageLink: "https://spoonacular.com/cdn/ingredients_100x100/chickpeas.jpg"
//     }
//   })
//   .spread((user, created) => { 
//     console.log(user);
//     console.log(created);
//   });

// fslkfdja.addIngredients(ingredient1, {through: {amount: 15.5, unit: "oz"}});