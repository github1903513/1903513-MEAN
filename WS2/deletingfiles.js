var fs = require("fs");
fs.unlink("example3.txt", function(err) {
  if (err) throw err;
  console.log("Deleted the file!");
});
