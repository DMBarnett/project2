$(document).ready(function() {
    var holdingArr = [];
  function runIngredientsQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.get("/api/ingredients", function(ingredients) {

        // Here we then log the ingredients to console, where it will show up as an object.
        console.log(ingredients);
        console.log("------------------------------------");
        // Loop through and create a card for each ingredient
        for (var i = 0; i < ingredients.length; i++) {
          //This makes the card that serves as the ingredient select
          // Then display the fields in the HTML (Section Name, Date, URL)
          var newCard = $("<div>")
              //do these need to give these a data-type to pass into an array so we can identify them? or using an id?
              newCard.attr("class", "card")
              newCard.attr("style", "width: 200px");
              newCard.attr("data-name", `${ingredients[i].name}`)
          var newImg = $("<img>");
              newImg.attr("class", "card-img-top");
              newImg.attr("src", `${ingredients[i].imageLink}`);
          var textDiv = $("<div>");
              textDiv.attr("class", "card-body");
          var ingrName = $("<h5>");
              ingrName.text(`${ingredients[i].name}`);
          textDiv.append(ingrName);
          newCard.append(newImg);
          newCard.append(textDiv);
          $("#ingredientsList").append(newCard);
        }
      });
  }
  runIngredientsQuery();

  $(".card").on("click", function(){
      event.preventDefault();
      
    holdingArr.push
  })
  $("#searchBtn").on("click", function(){

  })
});