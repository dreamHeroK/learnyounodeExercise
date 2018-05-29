let sum = 0;
process.argv.map((item, index) => {
  sum += index >= 2 ? parseInt(item) : 0;
});
console.log(sum);
