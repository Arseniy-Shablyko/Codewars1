var maxRedigit = function(num) {
  if(num < 100 || num > 999){
    return null;
  }
  let numArray = num.toString().split('');
  numArray.forEach( (value, index) =>{
      numArray[index] = parseInt(numArray[index]);   
  });
  let sortArray = numArray.sort((a, b) => a - b);
  let max = Math.max(...numArray) * 100;
  let min = Math.min(...numArray);
  let mid = sortArray[1] * 10;
  
  
  console.log(max);
  console.log(min);
  console.log(mid);
  
  return (max + mid + min);
};
