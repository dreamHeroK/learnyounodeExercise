const myMoudle = require('./firstMoudle');

const path = process.argv[2];
const type = process.argv[3];

myMoudle(path, type, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data.map(item => {
    console.log(item);
  });
});
