RecipeIngredient = sequelize.define("recipe_ingredient", {
  unit: sequelize.STRING,
  amount: Sequelize.INTEGER
})