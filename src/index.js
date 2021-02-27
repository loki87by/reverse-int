module.exports = function reverse (n) {
  let res = 0;
  let num;
  if(n < 0){num = n * -1}
  else{num = n}
  while(num > 0){
    res = res * 10 + num % 10
    num = Math.floor(num / 10)
  }
  return res
}
