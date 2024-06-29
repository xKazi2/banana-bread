var http = require('http');

http.createServer(function (req, res) {
  res.write("yep it works");
  res.end();
}).listen(8080);
