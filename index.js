
function sum(fromN, toN) {
  var num = 0;
  for(var i = fromN; i <= toN ; i++){
      num += i
  }
  console.log(num);
  return num;
}
console.log(sum(3, 7));
module.exports = sum;
