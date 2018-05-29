/*
 * @Author: kangxuanxin 
 * @Date: 2018-05-29 09:05:37 
 * @Last Modified by: kangxuanxin
 * @Last Modified time: 2018-05-29 09:53:42
 * @TODO await 必须要返回一个promise对象
 */

const http = require('http');
const bl = require('bl');

let arr = [];
function httpGet(i) {
  return new Promise(function(resolve, reject) {
    http.get(process.argv[i], res => {
      res.pipe(
        bl((err, data) => {
          if (err) {
            return;
          }
          resolve(data.toString());
        })
      );
    });
  });
}
async function getData() {
  for (let i = 2; i < 5; i++) {
    let str = await httpGet(i);
    console.log(str, i);
  }
}

getData();
