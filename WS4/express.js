var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

/*app.use(express.static("demosite/"));
app.get('/',function (req,res)
{
    res.sendFile(_dirname+ '/public/index.html');
});*/

app.get("/", function(req, res) {
  //res.send("Hello world!");
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/list", function(req, res) {
  //res.send("Listing data from a file!");
  res.sendFile(__dirname + "/exampledata.txt");
});

app.get("/add", function(req, res) {
  //res.send("lets try to add some data to file!");
  var data = require("./exampledata2.json");
  data.push({
    Name: "Ping Zhang",
    Company: "Laurea",
    Email: "ping.zhang@laurea.fi",
    Date: "3/3/2020 \r\n"
  });
  var jsonStr = JSON.stringify(data);
  var fs = require("fs");
  fs.writeFile("./exampledata2.json", jsonStr, function(err) {
    if (err) throw err;
    console.log("It is saved!");
  });
  res.send(
    "Saved the data to a file.Browse to the details to see the contents of the file!"
  );
});

app.get("/details", function(req, res) {
  //res.send("Listing data from a file!");
  var data = require("./exampledata2.json");
  var results = '<table border="1">';
  for (var i = 0; i < data.length; i++) {
    results +=
      "<tr>" +
      "<td>" +
      data[i].Name +
      "</td>" +
      "<td>" +
      data[i].Email +
      "</td>" +
      "</tr>";
  }
  res.send(results);
});

/*var bodyParser = require("body-parser");
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
});*/
app.get("/adduser", function(req, res) {
  //res.send("Listing data from a file!");
  res.sendFile(__dirname + "/adduser.html");

  app.post("/adduser", function(req, res) {
    var data = require("./exampledata2.json");

    data.push({
      Name: req.body.name,
      Company: req.body.Company,
      Email: req.body.Email,
      Date: new Date()
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile("exampledate2.json", jsonStr, function(err) {
      if (err) throw err;
      console.log("It is saved!");
    });
    res.send(
      "Saved the data to a file.Browse to the details to see the contents of the file!"
    );
  });
});

app.get("*", function(req, res) {
  res.send("can't find the requested page!", 404);
});

app.listen(8081, function() {
  console.log("example app listening on port 8081!");
});
