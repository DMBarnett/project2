Recipe = sequelize.define("recipe", {
  name: DataTypes.STRING,
  recipeText: DataTypes.TEXT,
  spoonacularID: DataTypes.INTEGER,
  imageLink: DataTypes.STRING
});
Recipe.belongsToMany(Ingredient, {through: RecipeIngredient})

