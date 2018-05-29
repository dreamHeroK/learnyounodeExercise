var fs = require('fs');

let path = process.argv[2];
let file = fs.readFileSync(path);
var length = file.toString().split('\n').length - 1;
console.log(length);
