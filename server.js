const PORT = process.env.PORT || 3000;
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });



    if (req.url.lastIndexOf("juega")) {
      res.write("Prueba prros");
 
    }else{
      res.write("Que pedooooo");
    }
    res.end();
  })
  .listen(PORT);