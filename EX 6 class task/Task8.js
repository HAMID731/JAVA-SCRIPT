function area(n, side) {
  return (n * Math.pow(side, 2)) / (4 * Math.tan(Math.PI / n));
}
const prompt = require('prompt-sync')();
const n = 5;
const side = prompt("Enter side: ");
console.log("Area of pentagon:", area(n, side));
