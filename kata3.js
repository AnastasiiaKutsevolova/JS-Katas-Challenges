// Function that returns only number of vowels.

const numberOfVowels = (data) =>
  data
    .toLowerCase()
    .split("")
    .filter((char) => "aeiou".includes(char)).length;

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("Aeioua"));
