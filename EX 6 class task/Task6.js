function displayCurrentDateTime() {
	let currentTime = new Date();
	let year = currentTime.getFullYear();
	let month = currentTime.getMonth() + 1;
	let day = currentTime.getDate();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	console.log(`Current date and time is ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);
}

displayCurrentDateTime();
