
    $("button").on("click", function() {
        var input = $(this).attr("data-input");
        // var queryURL = `https://api.giphy.com/v1/gifs/${input}?api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j`;
        var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j"
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
  
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
  
              var rating = results[i].rating;
  
              var p = $("<p>").text("Rating: " + rating);
  
              var personImage = $("<img>");
              personImage.attr("src", results[i].images.fixed_height.url);
  
              gifDiv.prepend(p);
              gifDiv.prepend(personImage);
  
              $("#gifs-appear-here").prepend(gifDiv);
            }
          });
      });


// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3JW2RJ6dsMStATDsiKO2H94sZZkjci7j";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
