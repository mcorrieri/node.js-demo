var http = require("http");
var dt = require("./firstmodule");

// create server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently:" + dt.myDateTime()); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
console.log("Server on port 8080 is running");

// node first.js
