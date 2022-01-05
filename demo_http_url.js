var http = require("http");
var url = require("url");

// create server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt); //end the response
  })
  .listen(8080); //the server object listens on port 8080
console.log("Server on port 8080 is running");

// http://localhost:8080/?year=2017&month=July
//browser will display: 2017 July
