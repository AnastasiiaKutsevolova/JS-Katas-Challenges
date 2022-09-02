const search = (array, value) => {
  for (const [i, element] of array.entries()) {
    if (element === value) {
      return i;
    }
  }
  return -1;
};
//console.log(search([2, 4, 6, 8], 8));

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let curValue = arr[middle];

    if (curValue < val) {
      min = middle + 1;
    } else if (curValue < val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 6, 8, 40], 40));
