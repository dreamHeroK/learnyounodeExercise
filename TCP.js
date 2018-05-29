const net = require('net');
const dayjs = require('dayjs');
const port = process.argv[2];
const server = net.createServer(function(socket) {
  socket.write(dayjs(new Date()).format('YYYY-MM-DD hh:mm') + '\n');
  socket.end();
});
server.listen(port);
