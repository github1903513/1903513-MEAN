var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    for (var i = 0; i < 100; i++) {
      console.log("hey" + i);
    }

    response.end("hello world\n");
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
