// 1st method
const sumLargestNumbers = (arr) => {
  let highestInt = 0;
  let nextHighestInt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestInt) {
      nextHighestInt = highestInt;
      highestInt = arr[i];
    } else if (arr[i] > nextHighestInt) {
      nextHighestInt = arr[i];
    } else {
      continue;
    }
  }
  return highestInt + nextHighestInt;
};

console.log("1", sumLargestNumbers([1, 10]));
console.log("1", sumLargestNumbers([1, 2, 3]));
console.log("1", sumLargestNumbers([10, 4, 34, 6, 92, 2]));
// 2nd method
const sumLargestNumbers1 = function (num) {
  const maxNum = Math.max(...num);
  const secondMax = num.sort(function (a, b) {
    return b - a;
  })[1];

  return maxNum + secondMax;
};

console.log("2", sumLargestNumbers1([1, 10]));
console.log("2", sumLargestNumbers1([1, 2, 3]));
console.log("2", sumLargestNumbers1([10, 4, 34, 6, 92, 2]));

// 3rd method
const sumLargestNumbers2 = (data) =>
  data
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((prev, curr) => prev + curr, 0);

console.log("3", sumLargestNumbers2([1, 10]));
console.log("3", sumLargestNumbers2([1, 2, 3]));
console.log("3", sumLargestNumbers2([10, 4, 34, 6, 92, 2]));
