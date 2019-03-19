
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
var gifs = ["WOW", "AWESOME", "COOL"];
function gifbuttons() {
    $("#gifbuttons").empty();
    var gifbuttons = $("<button>");
    for (var i = 0; i < gifs.length; i++);
    var a = $("<button>");
    a.addClass("gif");
    a.attr("data-input", gifs[i]);
    a.text(gifs[i]);
    $("#gifbuttons").append(a);
}
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var gif = $("#data-input").val().trim();
    gifs.push(gif);

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
        newgif.attr("src", gifresult[i].images.fixed_height.url);
        // console.log($(this).attr("data-name"));
        $("#gifform").append(newgif);
        // $(newgif).append("img src=" + gifresult + "/>");
        $(newgif).append("<p> Rating: " + gifresult.Rating + "</p>");

    });
});
