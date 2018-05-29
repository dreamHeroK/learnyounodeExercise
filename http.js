const http = require('http');
http.get(process.argv[2], (req, res) => {
  req.setEncoding('UTF8').on('data', function(data) {
    console.log(data);
  });
});
