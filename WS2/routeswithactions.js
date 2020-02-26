var http = require("http");

//create a server object
http
  .createServer(function(request, response) {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("Nothing here to see!");
    } else if (request.url === "/helloworld") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("Nyt yrität hakea Hoi Maailmaa!");
    } else if (request.url === "/json") {
      response.writeHead(200, { "Content-Type": "text/json" });
      var json = require("./sampledata.json");
      response.write(JSON.stringify(json));
    } else if (request.url === "/frontpage") {
      var fs = require("fs");
      fs.readFile("./frontpage.html", "utf-8", function(err, data) {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          response.writeHead(200, { "Content-Type": "text/plain" });
          response.write("frontpage");
        }
      });
    } else if (request.url === "/contact") {
      var fs = require("fs");
      fs.readFile("./contact.html", "utf-8", function(err, data) {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
        }
      });
    } else if (request.url === "/plaintext") {
      var fs = require("fs");
      fs.readFile("example.txt", "utf-8", function(err, data) {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          response.writeHead(200, { "Content-Type": "text/plain" });
          response.write(data);
        }
      });
    }
    response.end();
  })
  .listen(8081);
