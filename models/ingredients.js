const Ingredient = sequelize.define("ingredients", {
  name: DataTypes.STRING,
  spoonacularID: DataTypes.INTEGER,
  imageLink: DataTypes.STRING
});

Ingredient.associate() = function(models){
    Ingredient.belongsToMany(Recipe, {through: "RecipeIngredient"});
}

module.exports = Ingredient;