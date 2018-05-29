const fs = require('fs');

const path = process.argv[2];
const type = process.argv[3];
fs.readdir(path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var list = [];
  data.map(item => {
    if (item.indexOf('.' + type) !== -1) {
      console.log(item);
    }
  });
});
