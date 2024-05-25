export const lastTen = (arr, elem) => {
  if (arr.length < 10) {
    arr.push(elem);
  } else {
    arr.shift();
    arr.push(elem);
  }
  return arr;
};
