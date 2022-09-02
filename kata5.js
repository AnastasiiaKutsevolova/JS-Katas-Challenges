const reverseString = (str) => {
  return str.split("").reverse().toString();
};
console.log("reverse", reverseString("hello"));
////////////////
const isPalindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
};
console.log("palindrome", isPalindrome("racecar"));

/////////////
const reverseNum = (num) => {
  const revNum = num.toString().split("").reverse().join("");
  console.log("revNummmm", revNum);
  return parseInt(revNum) * Math.sign(num);
};
console.log("revNumber", reverseNum(676567));
//////
const maxNumber = (arr) => {
  return Math.max(...arr);
};
console.log(maxNumber([1, 2, 3, 4, 6]));
