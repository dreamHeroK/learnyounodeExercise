const http = require('http');
const port = process.argv[2];
const url = require('url');
const moment = require('moment');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let params = url.parse(req.url, true).query;
    let body = url.parse(req.url).pathname;
    console.log(body);
    let time = moment(params.iso).toDate();
    if (body == '/api/parsetime') {
      let json = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
      res.write(JSON.stringify(json));
      res.end();
    } else if (body == '/api/unixtime') {
      let json = {
        unixtime: time.getTime()
      };
      res.write(JSON.stringify(json));
      res.end();
    }
  })
  .listen(port);
