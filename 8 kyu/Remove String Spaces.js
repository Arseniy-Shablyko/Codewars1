function noSpace(x){
  let x_array = x.split('');
  for(let i = 0; i < x.length; i++){
    if(x_array[i] === ' '){
      x_array[i] = '';
    }
  }
  let str = x_array.join("");
  return str;
}
