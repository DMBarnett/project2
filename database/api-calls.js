var unirest = require("unirest");
var fs = require("file-system");

function apiCall() {
unirest
  .get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
  .header("X-Mashape-Key", "MMIAMKJSDQmshFHH58FZYYZzbiLKp1Vvkw0jsnCK8v2RSuvyTu")
  .header("Accept", "application/json")
  .end(function(result) {
    var recipeString = "";
    var foo = result.body.recipes[0].instructions;
    foo = foo.replace(/[, ]+/g, " ").trim();
    recipeString += result.body.recipes[0].id;
    recipeString += "," + result.body.recipes[0].title;
    recipeString += "," + foo;
    recipeString += "," + result.body.recipes[0].image + ",";
    for (var i = 0; i < result.body.recipes[0].extendedIngredients.length; i++) {
      var ingredientString = "";
      var ingredient = result.body.recipes[0].extendedIngredients[i].name.toLowerCase();
      recipeString += result.body.recipes[0].extendedIngredients[i].name + "-" + result.body.recipes[0].extendedIngredients[i].amount + "-" + result.body.recipes[0].extendedIngredients[i].unit + ":";
      ingredientString += result.body.recipes[0].id;
      ingredientString += "," + result.body.recipes[0].extendedIngredients[i].id;
      ingredientString += "," + ingredient;
      ingredientString += ",https://spoonacular.com/cdn/ingredients_100x100/" + result.body.recipes[0].extendedIngredients[i].image;
      // some code to read file and find duplicates here
      var existingIngredients = fs.readFileSync("./ingredients.csv");
          // if exists in file
          if (existingIngredients.indexOf(ingredient) >= 0){
            // do nothing
            console.log("duplicate: " + result.body.recipes[0].extendedIngredients[i].name);
          } else {
            // write to file if does not exist
            fs.appendFile("./ingredients.csv", ingredientString+"\n", (err) => {
                if (err) throw err;
            });
          };
      console.log(ingredientString + "\n");
    }
    fs.appendFile("./recipes.csv", recipeString+"\n", (err) => {
        if (err) throw err;
    });
    console.log("\n" + recipeString);
});
};
apiCall();
module.exports = apiCall;