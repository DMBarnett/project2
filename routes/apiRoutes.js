var db = require("../models");

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
    var passed = [];
    req.body.forEach(element => {
      passed.push[element.id];
    });
    console.log(passed);
    db.Recipe.findAll({
      include: [{
        model: Ingredients,
        where: {id: {[Op.contains]: passed}}
      }]
    }).then(function(returnedRecipes){
      console.log(returnedRecipes);

    })
  })
};
