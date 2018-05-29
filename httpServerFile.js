var http = require('http');
const fs = require('fs');
var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  var readStream = fs.createReadStream(filename);
  readStream.pipe(res);
});

server.listen(port);
