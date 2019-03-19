// $("button").on("click", function() {
//     event.preventDefault();
//     var used = $(this).attr("data-input");
//     var queryURL = `https://api.giphy.com/v1/gifs/search?q=${used}?api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j`;
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div>");

//           var rating = results[i].rating;

//           var p = $("<p>").text("Rating: " + rating);

//           var gifImage = $("<img>");
//           gifImage.attr("src", results[i].images.fixed_height.url);

//           gifDiv.prepend(p);
//           gifDiv.prepend(gifImage);

//           $("#gifs-appear-here").prepend(gifDiv);
//         }
//       });
//   });
//starter gif buttons
var gifs = ["WOW", "AWESOME", "COOL"];
//function to create new buttons
function createbuttons() {
    $("#gifbuttons").empty();
    var gifbutton = $("<button>");
    for (var i = 0; i < gifs.length; i++){
    var gifbutton = $("<button>");
    gifbutton.addClass("gif");
    gifbutton.attr("data-input", gifs[i]);
    gifbutton.text(gifs[i]);
    $("#gifbuttons").append(gifbutton);
    console.log(gifs)
    }
}
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var gif = $("#data-input").val().trim();
    gifs.push(gif);
    $("#gifbuttons").empty();
    gifbuttons();
});

$("#run-search").on("click", function () {
    for (var i = 0; i < gifs.length; i++);
    var input = $("#data-input").val().trim();
    console.log(input);
    var queryURL = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var newgif = $("<img>");
        var gifresult = response.data;
        console.log(gifresult[i]);
        $(newgif).attr("src", gifresult[i].images.fixed_height.url);
        // console.log($(this).attr("data-name"));
        $("#gifform").append(newgif);
        $(newgif).append("src", gifresult[i].images.fixed_height.url);
        $(newgif).append("<p> Rating: " + gifresult.Rating + "</p>");

    });
    });
    createbuttons();