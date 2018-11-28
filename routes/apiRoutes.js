var db = require("../models");

module.exports = function (app) {
  // Get all ingredients

  app.get("/api/ingredients", function (req, res) {
    db.ingredient.findAll({}).then(function (ingredients) {
      res.json(ingredients);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function (req, res) {
    databaseFill().then(function (newRecipe) {
      res.json(newRecipe);
    });
  });

  //using the selected ingredients, find all recipes that contain at least the selected ingredient
  app.post("/api/search/", function (req, res) {
    var passed = [];
    req.body.forEach(element => {
      passed.push[element.id];
    });
    console.log(passed);
    db.Recipe.findAll({
      include: [{
        model: Ingredients,
        where: {
          id: {
            [Op.contains]: passed
          }
        }
      }]
    }).then(function (returnedRecipes) {
      console.log(returnedRecipes);
    });
  });

  // Delete a recipe by id
  app.delete("/api/recipes/:id", function (req, res) {
    db.recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
      // do we need to delete all lines in join where this recipe appears?
    });
  });
};