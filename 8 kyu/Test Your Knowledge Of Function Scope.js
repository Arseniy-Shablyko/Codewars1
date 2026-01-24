function add(firstNumber){
  return function getSecondNumber(secondNumber){return firstNumber + secondNumber}
}
