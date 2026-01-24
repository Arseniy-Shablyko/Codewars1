function bubblesortOnce(a) {
  let sort_array = [];
  for(let i = 0; i < a.length; i++){
    sort_array[i] = a[i]
  }
  for(let i = 0; i < sort_array.length - 1; i++){
    if(sort_array[i] > sort_array[i + 1]){
      [sort_array[i], sort_array[i+1]] = [sort_array[i + 1], sort_array[i]];
    }
  }
  return sort_array;
}
