var fs = require("fs");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/adduser", function(req, res) {
  //res.send("Listing data from a file!");
  res.sendFile(__dirname + "/adduser.html");
  app.post("/adduser", function(req, res) {
    var data = "";
    data += req.body.name1 + "\n";
    data += req.body.email + "\n";
    data += req.body.company + "\n";
    console.log(data);
    res.send(data);
  });
});
app.listen(8081, function() {
  console.log("example app listening on port 8081!");
});
