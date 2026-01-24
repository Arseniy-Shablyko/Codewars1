function filterHomogenous(arrays) {
  let new_matrix = [];
  for(let i = 0; i < arrays.length; i++){
    let isTypeCorrect = true;
    
    if(arrays[i].length === 0){
      continue;
    }
    
    for(let j = 0; j < arrays[i].length; j++){
      let type = typeof(arrays[i][0]);
      if(typeof(arrays[i][j]) != type){
        isTypeCorrect = false;
        break;
      }
    }
    
    if(isTypeCorrect === true){
      new_matrix.push(arrays[i]);
    }
  }
  return new_matrix;
}
