const http = require('http');
const bl = require('bl');

// 这个难度不是node。是英文真的难看  md
http.get(process.argv[2], (req, res) => {
  let num = 0;
  req.pipe(
    bl(function(err, data) {
      console.log(data.toString().length);
      console.log(data.toString());
    })
  );
});
