module.exports = function reverse (n) {
    
    let result = 0;
    let a = Math.abs(n);
    while (a > 0) {
      result = result * 10 + a % 10;
      a = Math.floor(a / 10);
    }
  
    if (n < 0) {
        // result = result * (-1);
    } 
    return result;
}
