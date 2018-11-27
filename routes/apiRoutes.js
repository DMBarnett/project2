var db = require("../models");
var databaseFill = require("../database/database-build");

module.exports = function(app) {
  // Get all ingredients
  app.get("/api/ingredients", function(req, res) {
    db.ingredient.findAll({}).then(function(ingredients) {
      res.json(ingredients);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    databaseFill().then(function(newRecipe) {
      res.json(newRecipe);
    });
  });

  // Delete a recipe by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.recipe.destroy({ where: { id: req.params.id } }).then(function(dbRecipe) {
      res.json(dbRecipe);
      // do we need to delete all lines in join where this recipe appears?
    });
  });
};
