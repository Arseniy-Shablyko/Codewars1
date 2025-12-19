function rentalCarCost(d) {
  let result = d * 40;
  if (d >= 7) result -= 50;
  else if (d >= 3) result -= 20;
  return result;
}
