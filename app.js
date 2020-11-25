const request = require("request");
var fs = require('fs');

var list = fs.readFileSync("input.txt", "utf-8").split("\n");

var i;

console.log("---------------------");

for (i of list) {
  (function(id) {
    request({
      method: "GET",
      url: "https://steamcommunity.com/id/" + id,
    }, (error, response, body) => {
      if (body.match("Error")) {
        console.log("\x1b[32m" + id + "\x1b[0m");
    fs.appendFileSync("output.txt", id + "\n");
      } else {
        console.log("\x1b[31m" + id + "\x1b[0m");
      }
    })
  })(i);
}
