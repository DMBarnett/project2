module.exports = function (sequelize, DataTypes) {
  const Ingredient = sequelize.define("ingredients", {
    name: DataTypes.STRING,
    spoonacularID: DataTypes.INTEGER,
    imageLink: DataTypes.STRING
  })
  // {
  //   classMethods: {
  //     associate: function(models) {
  //       Ingredient.belongsToMany(models.Recipe, {
  //         through: "RecipeIngredient"
  //       });
  //     }
  //   }
  // });
  console.log(Ingredient);
  return Ingredient
};