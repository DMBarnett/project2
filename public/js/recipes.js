$(document).ready(function() {
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
