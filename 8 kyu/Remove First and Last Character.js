function removeChar(str){
  let array_str = str.split('');
  let new_str = '';
  for(let i = 1; i < str.length - 1; i++){
    new_str += array_str[i];
  }
  return new_str;
};
