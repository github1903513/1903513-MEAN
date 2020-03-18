var express = require("express");
var app = express();
// Serve static content from this dir
app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");
app.locals.pretty = true;

// use res.render to load up an ejs view file

// index page
app.get("/", function(req, res) {
  res.render("pages/index", {
    new_heading: "This was passed from the js file",
    new_content: "Lorem Ipsum",
    new_footer: "Here is the new footer"
  });
});

var data = {
  users: [
    { name: "John", age: 25 },
    { name: "Mike", age: 42 },
    { name: "Samntha", age: 51 }
  ]
};
app.get("/users", function(req, res) {
  res.render("pages/users", data);
});

// err handle
app.get("*", function(req, res) {
  res.send("can't find the requested page!", 404);
});

app.listen(8081);
console.log("8081 is the magic port");
