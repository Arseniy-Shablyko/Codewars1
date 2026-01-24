function sumTriangularNumbers(n) {
  if(n<0){
    return 0;
  }
  let sum = (n*(n+1)*(n+2))/6;
  return sum
}
