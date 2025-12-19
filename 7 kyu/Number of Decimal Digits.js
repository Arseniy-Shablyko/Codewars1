function digits(n) {
  let counter = 0;
  let digit_array = n.toString().split('').map(Number);
  console.log(digit_array);
  digit_array.forEach(function(item){
    counter++;
  })
  return counter;
}
