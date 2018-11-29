var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function (app) {
  // Get all ingredients

  app.get("/api/ingredients", function (req, res) {
    db.ingredient.findAll({}).then(function (ingredients) {
      res.json(ingredients);
    });
  });

  // Create a new recipe
  app.post("/api/new-recipe", function (req, res) {
    console.log(req);
    // databaseFill().then(function (newRecipe) {
    //   res.json(newRecipe);
    // });
  });

  //using the selected ingredients, find all recipes that contain at least the selected ingredient
  app.post("/api/search/", function(req, res) {
    console.log(req.body);
    var foo = JSON.parse(req.body.hello);
    console.log(foo);
    //foo = [1,4];
    db.recipe
    .findAll({
      include: [{
        model: db.ingredient,
        as: "Ingredients",
        where: {id: { [Op.in]:foo} }
      }]
    }).then(function (returnedRecipes) {
      console.log(returnedRecipes);
      res.json(returnedRecipes);
    })
  })
};
