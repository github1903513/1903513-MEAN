var http = require("http");

//create a server object
http.createServer(function(request, response)
{
   
    
    if(request.url === "/")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("Olet saapunut palvelimen juureen.");
    }
    else if (request.url === "/helloworld")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("Nyt yrität hakea Hoi Maailmaa!");
    }
    else if (request.url === "/json")
    {
        response.writeHead(200,{"Content-Type":"text/json"});
        var json = require('data.json');
        response.write (JSON.stringify(json));
    }
    response.end();
}
)
.listen(8081);
