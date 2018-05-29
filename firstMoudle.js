const fs = require('fs');
module.exports = function(path, type, callback) {
  fs.readdir(path, (err, data) => {
    if (err) {
      return callback(err);
    }
    let list = [];
    data.map(item => {
      if (item.indexOf('.' + type) !== -1) {
        list.push(item);
      }
    });
    callback(null, list);
  });
};
