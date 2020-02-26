//one file
var fs = require("fs");
fs.readFile("example.txt", "utf-8", function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

//two files
var fs = require("fs");
let content = fs.readFileSync("example.txt", "utf-8");
fs.appendFile("example2.txt", content, function(err) {
  if (err) throw err;
  console.log("Show two files contents!");
  console.log(content);
});
