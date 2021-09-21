const PORT = process.env.PORT || 3000;
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });



    if (req.url.lastIndexOf("juega") !== -1) {
      // res.write("A jugar papus");
      var inicio = req.url.lastIndexOf("juega") + 5;
      var fin = inicio + 49;
      var texto = req.url;
      texto = texto.substring(inicio,fin);

    } else {
      res.write("Oh nooooo");
    }
    res.end();
  })
  .listen(PORT);