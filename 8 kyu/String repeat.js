function repeatStr (n, s) {
  if(n === 0){
    return '';
  }
  let symbol = s;
  for(let i = 1; i < n; i++){
    s += symbol;
  }
  return s;
}
