module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("recipe", {
    name: DataTypes.STRING,
    recipeText: DataTypes.TEXT,
    spoonacularID: DataTypes.INTEGER,
    imageLink: DataTypes.STRING
  }, 
  // {
  //   classMethods: {
  //     associate: function(models) {
  //       Recipe.belongsToMany(models.Ingredient, {
  //         through: "RecipeIngredient"
  //       });
  //     }
  //   }
  // }
  );

  console.log(typeof Recipe);
  return Recipe
};

//recipe.addingredient(ingredient, {through:{amount: 3, unit:"buns"}})