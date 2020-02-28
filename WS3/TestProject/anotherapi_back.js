var api_key = "addf50db8f802b0cad21bfda6ac73de9";
var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });

    /*var request = http.request(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=" +
        api_key +
        "&format=json",
      function(res) {
        var data = "";
        res.on("data", function(chunk) {
          data += chunk;
        });
        res.on("end", function() {
          console.log(data);
        });
      }
    );
    request.on("error", function(e) {
      console.log(e.message);
    });*/

    var id = "92ce54fe";
    var output = "";
    var request1 = require("request");
    request1("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", function(
      error,
      response,
      body
    ) {
      if (!error && response.statusCode == 200) {
        var json = JSON.parse(body);
        output = JSON.stringify(body);
        console.log(output);
        /*for (var i = 0; i < body.length; i++) {
          console.log(json.Search[i]);
        }*/

        //console.log(json); // Print the google web page.
      }
    });

    //response.write(output);
    response.end();
  })
  .listen(8081);
