function stray(numbers) {
  let number = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    number = number ^ numbers[i]
  }
  return number;
}
