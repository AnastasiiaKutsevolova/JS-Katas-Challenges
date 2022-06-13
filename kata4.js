// Node program that takes in an unlimited number of command line arguments, go through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. Requires at least 2 arguments.

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(`Error: please enter at least 2 args`);
  process.exit();
}

let total = 0;

for (let nb of args) {
  if (isNaN(Number(nb))) {
    console.log(`Error: please input only numbers`);
    process.exit();
  }

  if (Number.isInteger(Number(nb))) {
    total += Number(nb);
  }
}
console.log("total:", total);
