function sumDigits(n) {
  let sum = 0;
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function main() {
  const prompt = require('prompt-sync')();
  let num =  prompt("Enter an integer: ");
  console.log("The sum of the digits is:", sumDigits(num));
}

main();
