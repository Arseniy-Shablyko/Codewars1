function createPhoneNumber(numbers){
  let str = '(';
  for (let i = 0; i < 3; i++) {
    str += numbers[i];
  }
  str += ') ';
  for (let i = 3; i < 6; i++) {
    str += numbers[i];
  }
  str += '-';
  for (let i = 6; i < numbers.length; i++) {
    str += numbers[i];
  }
  return str;
}
