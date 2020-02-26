var fs = require("fs");
fs.readFile("sampledata.json", "utf8", function(err, data) {
  if (err) console.log(err);
  var test1 = JSON.parse(data); //读取的值

  for (var i = 0; i < test1.length; i++) {
    console.log(
      test1[i].name,
      test1[i].age,
      test1[i].company,
      test1[i].address
    );
  }

  console.log("<table border='1'>");
  for (var i = 0; i < test1.length; i++) {
    console.log(
      "<tr><td>" +
        test1[i].name +
        "</td><td>" +
        test1[i].age +
        "</td><td>" +
        test1[i].company +
        "</td><td>" +
        test1[i].address +
        "</td></tr>"
    );
  }
  console.log("</table>");
});

//creat a web server to show the json data
var http = require("http");

//create a server object
http
  .createServer(function(request, response) {
    var fs = require("fs");
    fs.readFile("sampledata.json", "utf8", function(err, data) {
      if (err) console.log(err);
      var test1 = JSON.parse(data); //读取的值

      console.log("<table border='1'>");
      for (var i = 0; i < test1.length; i++) {
        console.log(
          "<tr><td>" +
            test1[i].name +
            "</td><td>" +
            test1[i].age +
            "</td><td>" +
            test1[i].company +
            "</td><td>" +
            test1[i].address +
            "</td></tr>"
        );
      }
      console.log("</table>");
    });
  })
  .listen(8081);
