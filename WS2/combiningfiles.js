//two files
var fs = require("fs");
let content = fs.readFileSync("example.txt", "utf-8");
fs.appendFile("example2.txt", content, function(err) {
  if (err) throw err;
  console.log(content);
});
fs.writeFile("example3.txt", content, function(err) {
  if (err) throw err;
  console.log("It's saved!");
});
fs.appendFile("example3.txt", "I wrote this!", function(err) {
  if (err) throw err;
  console.log("It is appended to the file!");
});
/*fs.appendFile("example3.txt", "I wrote this!", function(err) {
  if (err) throw err;
  console.log("It is appended at the end of the file!");
});*/
