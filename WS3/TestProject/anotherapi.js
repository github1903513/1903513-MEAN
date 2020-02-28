var api_key = "addf50db8f802b0cad21bfda6ac73de9";
var http = require("http");
/*http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });*/

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

    http
      .createServer(function(request, response) {
        response.writeHead(200, { "Content-Type": "text/json" });
        response.write(output);
        response.end();
      })
      .listen(8081);
  }
});

/*  response.end();
  })
  .listen(8081);*/
