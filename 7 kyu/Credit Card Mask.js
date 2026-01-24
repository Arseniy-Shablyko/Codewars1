function maskify(cc) {
  let ccArray = cc.split('');
  if(ccArray.length < 5){
    return cc;
  }
  
  for(let i = 0; i < cc.length - 4; i++){
    ccArray[i] = '#';
  }
  console.log(ccArray);
  return ccArray.join('');
}
