function futureInvestmentValue(investmentAmount, monthlyInterestRate, years) {
  return investmentAmount * Math.pow((1 + monthlyInterestRate), (years * 12));
}

function main() {
  const prompt = require('prompt-sync')();
  const investmentAmount = prompt("Enter investment amount: ");
  const annualInterestRate = prompt("Enter annual interest rate (in percent): ");
  const monthlyInterestRate = annualInterestRate / 1200;

  console.log("Years\tFuture Value");
  for (let years = 1; years <= 12; years++) {
    const futureValue = futureInvestmentValue(investmentAmount, monthlyInterestRate, years).toFixed(2);
    console.log(`${years}\t\t${futureValue}`);
  }
}

main();
