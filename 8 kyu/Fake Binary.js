function fakeBin(x){
  let new_x = '';
  for(let i = 0; i < x.length; i++){
    if(parseInt(x[i]) > 4){
      new_x += '1';
    }
    else{
      new_x += '0';
    }
  }
  return new_x;
}
