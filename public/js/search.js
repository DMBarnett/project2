$(document).ready(function () {
    var holdingArr = [];
    function runIngredientsQuery() {
        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.get("/api/ingredients", function (ingredients) {

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
                newCard.attr("data-id", `${ingredients[i].id}`)
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
            $(".card").on('click', function (event) {
                event.preventDefault();
                // when card is clicked, clicked state of card should become "true" and the ID stored

                var $this = $(this);
                if ($this.data('clicked')) {
                    $(this).removeClass("chosen");
                }
                else {
                    $this.data('clicked', true);
                    $(this).addClass("chosen");
                    var ingredCard = $(this).attr("data-id");
//push ingredients into holdingArr for recipe search submit
                    holdingArr.push(ingredCard)
                    console.log($this);
                    console.log(holdingArr);
                }
            })



        });

    }


    runIngredientsQuery();





    function selectIngredient() {


        // console.log(ingredCard);
        // alert("you clicked on " + ingredCard);
    }

    selectIngredient();

    // ingredCard.attr("class", "card greenCard");
    // ingredCard.attr("data-id");

    //  If it is being clicked for the first time you will push to the array, if it is being unclicked you will search for the id and remove it from the array
    // ingredCard.onClick = function(){
    //     ingredCard.style.backgroundColor = "green";
    // }

    // each ID should be stored in an array. 


    // This array will be pushed/passed to the database to match up with recipes
    //  holdingArr.push(ingredCard);



    //   $("#searchBtn").on("click", function(){

    //   });
});
