function solve(a,b){
  while(a !== 0 || b !== 0){
    if(a === 0 || b === 0){
      break;
    }
    else if(a >= b*2){
      a = a - 2*b;
    }
    else if(b >= a*2){
      b = b - a*2;
    }
    else{
      break;
    }
  }
  return [a, b];
}
