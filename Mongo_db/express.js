var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set the view engine to ejs
app.set("view engine", "ejs");
app.locals.pretty = true;

// Tuodaan moduuli ohjelmaan
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017";

// Luodaan uusi yhteysolio käyttäen edellä määriteltyä URI:a sekä
// tarvittavia parametreja
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//show frontpage
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.render("pages/index");
});

// subdirectory register
app.get("/register", function (req, res) {
  res.render("pages/registerform");
  app.post("/register", function (req, res) {
    console.log(req.body);
    var email1 = req.body.email;
    var password1 = req.body.password;

    //insert register record to database
    client.connect(function (err, r) {
      if (err) throw err;
      else console.log("Connected!");

      var myobj = { Email: email1, Password: password1 };
      const collection = client.db("userinfo").collection("userinfo");
      collection.insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log(res.insertedCount);
        client.close(); // Suljetaan tietokantayhteys
      });
      res.render("pages/registerresult");
    });
  });
});

// subdirectory register
app.get("/login", function (req, res) {
  res.render("pages/loginform");

  app.post("/login", function (req, res) {
    console.log(req.body);
    var email1 = req.body.email;
    var password1 = req.body.password;

    //insert register record to database
    client.connect(function (err, r) {
      if (err) throw err;
      else console.log("Connected!");

      var myobj = { Email: email1, Password: password1 };
      const collection = client.db("userinfo").collection("userinfo");
      const collection2 = client.db("test").collection("leffat");

      var findresult = collection.findOne(myobj);
      console.log(findresult);
      if (findresult) {
        console.log("Email and Password are OK!");
        collection2.find().toArray(function (err, results) {
          console.log(results);
          //var html = parse(results);
          //res.send(html);
          client.close(); // Suljetaan tietokantayhteys
          res.render("pages/leffat", { taulu: results });
        });
      } else {
        client.close(); // Suljetaan tietokantayhteys
        res.render("pages/loginform");
      }
    });
  });
});

// err handle
app.get("*", function (req, res) {
  res.send("can't find the requested page!", 404);
});

app.listen(8081);
