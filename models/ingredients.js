module.exports = function(sequelize, DataTypes) {
  var ingredients = sequelize.define("ingredients", {
    name: DataTypes.STRING,
    spoonacularID: DataTypes.INTEGER,
    imageLink: DataTypes.STRING
  });
  return ingredients;
};