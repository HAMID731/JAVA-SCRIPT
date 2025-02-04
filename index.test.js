const {multiply, addition} = require("./index.js");

	let numberOne = 2;
	let numberTwo = 6; //Arrange

test('multiply two numbers', ()=>{
	let result = multiply(numberOne,numberTwo);  //Act
	expect(result).toBe(12); //Assert
})

test("add two numbers", ()=>{
	let result1 = addition(numberOne, numberTwo);
	let answer = 8;
	expect(result1).toBe(answer);
})