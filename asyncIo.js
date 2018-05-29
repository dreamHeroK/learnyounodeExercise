var fs = require('fs');

let path = process.argv[2];
let file = fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  }
  var length = data.toString().split('\n').length - 1;
  console.log(length);
});
