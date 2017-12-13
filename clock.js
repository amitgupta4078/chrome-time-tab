<<<<<<< HEAD
var hours = 0;
var minutes = 0;
var seconds = 0;

var time = new Date();
hours = time.getHours()
minutes = time.getMinutes()
seconds = time.getSeconds()

showTime(hours, minutes, seconds);

function showTime (hours, minutes, seconds) {
	// console.log(hours + " : " + minutes + " : " + seconds + "\n");
	if (hours < 10) {
		hours = '0' + (hours%12)
	}
	if (minutes < 10) {
		minutes = '0' + minutes
	}
	if (seconds < 10) {
		seconds = '0' + seconds
	}
	const time = hours + " : " + minutes + " : " + seconds;
	document.getElementById('timer').innerHTML = time
}

function updateMinutes() {
	if (minutes == 59) {
		minutes = 0;
		updateHours();
	} else {
		minutes++;
	}
}

function updateHours() {
	if (hours == 12) {
		hours = 1;
	} else {
		hours++;
	}
}

function calculateTime(){
	if (seconds == 59) {
		seconds = 0;
		updateMinutes();
	} else {
		seconds++;
	}
	showTime(hours, minutes, seconds);
}

setInterval(calculateTime, 1000);
calculateTime();
=======
var hours = 0;
var minutes = 0;
var seconds = 0;

var time = new Date();
hours = time.getHours()
minutes = time.getMinutes()
seconds = time.getSeconds()

showTime(hours, minutes, seconds);

function showTime (hours, minutes, seconds) {
	// console.log(hours + " : " + minutes + " : " + seconds + "\n");
	if (hours < 10) {
		hours = '0' + hours
	}
	if (minutes < 10) {
		minutes = '0' + minutes
	}
	if (seconds < 10) {
		seconds = '0' + seconds
	}
	const time = hours + " : " + minutes + " : " + seconds;
	document.getElementById('timer').innerHTML = time
}

function updateMinutes() {
	if (minutes == 59) {
		minutes = 0;
		updateHours();
	} else {
		minutes++;
	}
}

function updateHours() {
	if (hours == 12) {
		hours = 1;
	} else {
		hours++;
	}
}

function calculateTime(){
	if (seconds == 59) {
		seconds = 0;
		updateMinutes();
	} else {
		seconds++;
	}
	showTime(hours, minutes, seconds);
}

setInterval(calculateTime, 1000);
calculateTime();
>>>>>>> 383ab4ebf1062989d54de2fc9b36fd9ba9edc26a
