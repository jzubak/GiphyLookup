//starter gif buttons
var gifs = ["WOW", "AWESOME", "COOL"];

$(document).on("click", ".gif", function () {
    event.preventDefault();
    // var used = "AWSOME";
    var used = this.innerHTML;
    // console.log(used);
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${used}&api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var gifDiv = $("<img>");
        //    console.log(response);

        var Divresult = response.data;
        // console.log($(this).attr("data-input"));
        $(".gifbuttons").append(gifDiv);
        console.log(Divresult[2]);
        // console.log(Divresult[i]);
        $(gifDiv).attr("src", Divresult[2].images.fixed_height.url);
        // console.log($(this).attr("data-name"));
        $("#gifform").append(gifDiv);
        $(gifDiv).append("src", Divresult[2].images.fixed_height.url);
        // $(gifDiv).append("<p>Rating: "+Divresult[i].Rating+"</p>")
    });

});


//function to create new buttons
function createbuttons() {
    $(".gifbuttons").empty();
    var gifbutton = $("<button>");
    for (var i = 0; i < gifs.length; i++) {
        var gifbutton = $("<button>");
        gifbutton.addClass("gif");
        gifbutton.attr("data-input", gifs[i]);
        gifbutton.text(gifs[i]);
        $(".gifbuttons").append(gifbutton);
        // console.log(gifs)
    }
}

// function displaygif() {
$("#run-search").on("click", function () {
    for (var i = 0; i < gifs.length; i++);
    var input = $("#data-input").val().trim();
    // console.log(input);
    var queryURL = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var newgif = $("<img>");
        var gifresult = response.data;
        // console.log(gifresult[i]);
        $(newgif).attr("src", gifresult[i].images.fixed_height.url);
        // console.log($(this).attr("data-name"));
        $("#gifform").append(newgif);
        $(newgif).append("src", gifresult[i].images.fixed_height.url);
        $(newgif).append("<p> Rating: " + gifresult[i].rating + "</p>");

        var gifStill = gifresult[i].images.fixed_height_still.url;
        var gifAnimate = gifresult[i].images.fixed_height.url;
        var moveGif = $(`<img class="gif" src="${gifStill}" data-still="${gifStill}" data-animate="${gifAnimate}" data-state="still`)

        $(newgif).append(moveGif);
    });

    });

    $(document).on("click", "#run-search", function (event) {
        event.preventDefault();
        var gif = $("#data-input").val().trim();
        // console.log("#data-input");
        gifs.push(gif);
    console.log(gifs);
        createbuttons();
    });

    $(document).on("click", ".gif", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
// });
// $(document).on("click", ".gif", displaygif);
createbuttons();