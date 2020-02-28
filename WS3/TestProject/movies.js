/*var request = require("request");
var id = "92ce54fe";
var url = "http://www.omdbapi.com/?s=star+wars&apikey=" + id;

request.get({ url: url, json: true }, function(err, res, data) {
  if (err) {
    return console.log(err);
  } else if (res.statusCode === 200) {
    // you can use data here - already parsed as json
    //var json = data;
    console.log(data);
  } else {
    console.log("Status:", res.statusCode);
  }
});

var id = "92ce54fe";
getJSONsomehow("http://www.website.com/" + id, function(err, json) {
  if (err) {
    // error
  } else {
    // your json can be used here
    console.log(json);
  }
});
var id = "92ce54fe";
var request = require("request");
request(
  "http://www.omdbapi.com/?s=star+wars&apikey=" + id,
  { json: true },
  function(err, res, body) {
    if (err) {
      return console.log(err);
    }
    console.log(body.url);
    console.log(body.explanation);
  }
);*/

var id = "92ce54fe";
var request = require("request");
request("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", function(
  error,
  response,
  body
) {
  if (!error && response.statusCode == 200) {
    var json = JSON.parse(body);

    /*for (var i = 0; i < body.length; i++) {
      console.log(json.Search[i]);
    }*/

    console.log(json); // Print the google web page.
  }
});
