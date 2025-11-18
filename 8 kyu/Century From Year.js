function century(year) {
  if(year < 101){
    return 1;
  }
  if(year % 100 == 0){
    return year / 100;
  }
  let centery = Math.trunc(year / 100) + 1;
  return centery;
}
