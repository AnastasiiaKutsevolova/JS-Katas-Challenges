// # Higher-Order Functions #

// Challenge 1
const addTwo = (num) => {
  return num + 2;
};

console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
const addS = (word) => {
  return word.concat("s");
};

console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
const map = (array, callback) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

console.log(map([1, 2, 3], addTwo));

// Challenge 4
let alphabet = "";

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const letters = ["a", "b", "c", "d"];

forEach(letters, (char) => (alphabet += char));

console.log(alphabet);

// Challenge 5
const mapWith = (array, callback) => {
  const res = [];

  forEach(array, (num) => res.push(callback(num)));

  return res;
};
console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
const reduce = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
};

const add = (a, b) => a + b;
const sum = reduce([1, 2, 3], add, 0);

// Challenge 7
const intersection = (...arrays) => {
  const duplicates = {};

  const result = [];

  arrays.forEach((arr) => {
    arr.forEach((num) => {
      duplicates[num] = (duplicates[num] || 0) + 1;
    });
  });

  for (const key in duplicates) {
    if (duplicates[key] === arrays.length) {
      result.push(+key);
    }
  }

  return result;
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

// Challenge 8
const conditionalSum = function (arr, condition) {
  const add = (num1, num2) => {
    if (condition === "even" && num2 % 2 === 0) {
      return num1 + num2;
    }
    if (condition === "odd" && num2 % 2 === 1) {
      return num1 + num2;
    }
    return num1;
  };
  return arr.reduce((acc, val) => add(acc, val), 0);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
