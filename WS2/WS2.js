var fs = require("fs");

console.log("program started");
var data= fs.readFileSync('example.txt');
console.log(data.toString());

for (var i=0; i< 15; i++)
{
console.log("Node just keeps on going while the file is being read...");

}


var fs = require("fs");

console.log("program started");
fs.readFile('example.txt',results);

for(var i=0; i<15; i++)
{
    console.log("Node just keeps on going while the file is being read...");
    
    }

function results(err,data)
{
    if (err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());
}    