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
