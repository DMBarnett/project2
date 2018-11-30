$(document).ready(function() {
  var foo = localStorage.getItem("recipes");
  foo = JSON.parse(foo);
  console.log(foo);

  function queryIngredients(recipeID) {
    console.log(recipeID);
    $.post("/api/ingrSearch", { recipe: recipeID }, function(response) {
      console.log(response);
      //need to pull amount and units from recipe_ingredients table
      unitAmountCall(response, recipeID);
    });
  }
  
  function unitAmountCall(x,y){
    var ingredientsArr = [];
    x.forEach(element =>{
      ingredientsArr.push(element.id);
    })
    $.post("/api/unitAmount", {
      "ingredientsID":JSON.stringify(ingredientsArr),
      "recipeID": y
    }, function(response){
      console.log(response)
    })
  }

  foo.forEach(element => {
    var newCard = $("<div>");
    var image = element.imageLink;
    image = image.substring(0, image.length - 1);
    console.log(image);
    //do these need to give these a data-type to pass into an array so we can identify them? or using an id?
    newCard.attr("class", "card");
    newCard.attr("data-id", `${element.id}`);
    var newImg = $("<img>");
    newImg.attr("class", "card-img-top");
    newImg.attr("style", "width: 200px");
    newImg.attr("src", `${image}`);
    var textDiv = $("<div>");
    textDiv.attr("class", "card-body");
    var ingrName = $("<h5>");
    ingrName.text(`${element.name}`);
    var working = $("<p>");
    working.attr("id", `${element.id}`);
    textDiv.append(ingrName);
    textDiv.append(working);
    newCard.append(newImg);
    newCard.append(textDiv);
    $("#recipes-Cards").append(newCard);
  });

  $(document).on("click", ".card", function() {
    event.preventDefault();
    console.log(foo);

    var chosen = $(this).data("id");
    queryIngredients(chosen);
    var finder = $(`p#${chosen}`);
    console.log(finder);
    finder.text("hello world");
  });
  $("#textBtn").on("click", function() {
    event.preventDefault();

    //Use to test passing arr to the api
    //var foo = [1,2,3,4];

    foo = JSON.stringify(IngredArr);
    $.post("/api/twilio", { hello: foo }, function(response) {
      console.log(response);
    });
  });
});
