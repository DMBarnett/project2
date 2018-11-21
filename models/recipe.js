const Recipe = sequelize.define("recipe", {
  name: DataTypes.STRING,
  recipeText: DataTypes.TEXT,
  spoonacularID: DataTypes.INTEGER,
  imageLink: DataTypes.STRING
});

Recipe.associate = function(models){
  Recipe.belongsToMany(models.Ingredient, {through: "RecipeIngredient"})
};

module.exports = Recipe;


//recipe.addingredient(ingredient, {through:{amount: 3, unit:"buns"}})