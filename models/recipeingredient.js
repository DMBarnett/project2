const RecipeIngredient = sequelize.define("recipe_ingredient", {
  amount: Sequelize.INTEGER,
  unit: sequelize.STRING
})

module.exports = RecipeIngredient;