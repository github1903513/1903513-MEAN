var express = require("express");
var app = express();

app.use(express.static("demosite/"));
app.listen(8081);
console.log("8081 is the magic port");
