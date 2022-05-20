// 1st method
const sumLargestNumbers = function (num) {
  const maxNum = Math.max(...num);
  const secondMax = num.sort(function (a, b) {
    return b - a;
  })[1];

  return maxNum + secondMax;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// 2nd method
const sumLargestNumbers2 = (data) =>
  data
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((prev, curr) => prev + curr, 0);

console.log("2", sumLargestNumbers2([1, 10]));
console.log("2", sumLargestNumbers2([1, 2, 3]));
console.log("2", sumLargestNumbers2([10, 4, 34, 6, 92, 2]));
