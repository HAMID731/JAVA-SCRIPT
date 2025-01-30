function reverse(n) {
	let reversed = 0;
	while (n !== 0) {
		reversed = reversed * 10 + n % 10;
		n = Math.floor(n / 10);
	}
	return reversed;
}

function isPalindrome(n) {
	return n === reverse(n);
}


console.log(isPalindrome(121));