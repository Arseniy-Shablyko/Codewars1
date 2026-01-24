const findSquares = num => {
  let max = Math.pow((num + 1)/2,2)
  let min = Math.pow((num-1)/2,2)
    return `${max}-${min}`;
};
