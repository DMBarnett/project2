var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  // Get all ingredients
  app.get("/api/ingredients", function(req, res){
    db.ingredient.findAll({
    }).then(function(dbingredients){
      res.json(dbingredients)
    })
  });
  //using the selected ingredients, find all recipes that contain at least the selected ingredient
  app.post("/api/search/", function(req, res){
    console.log(req.body);
    var foo = JSON.parse(req.body.hello)
    console.log(foo);
    db.recipe.findAll({
      include: [{
        model: db.ingredient,
        where: {id: {[Op.contains]: foo}}
      }]
    }).then(function(returnedRecipes){
      console.log(returnedRecipes);
      res.json(returnedRecipes);
    })
  })
};
