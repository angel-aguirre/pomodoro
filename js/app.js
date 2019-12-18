const userSettings = {
	minsWork: 25,
	minsShortBreak: 5,
	minsLongBreak: 15,
	started: false
}

const timerInfo = {
	mins: userSettings.minsWork,
	secs: 0,
	started: false,
	minsSelected: 25
}

// Timer type selected
let workBtn = document.querySelector('#work-btn');
let shortBreakBtn = document.querySelector('#short-break-btn');
let longBreakBtn = document.querySelector('#long-break-btn');

// Control buttons
let playBtn = document.querySelector('#play-btn');
let pauseBtn = document.querySelector('#pause-btn');
let restartBtn = document.querySelector('#restart-btn');

// Labes for the timer and description text
let timerLabel = document.querySelector('span.time');
let timerDescription = document.querySelector('span.time-description');

// Variable that storage the setInterval for the timer
let timer;

let alarmAudio = document.querySelector('#alarm-audio');

workBtn.addEventListener('click', function() {
	console.log('Work timer selected');
	clearInterval(timer);
	(document.querySelector('div.border')).classList = 'border border-red';
	timerLabel.innerText = '25:00';
	timerDescription.innerText = 'Work';
	timerInfo.minsSelected = userSettings.minsWork;
	init(userSettings.minsWork);
});

shortBreakBtn.addEventListener('click', function() {
	console.log('Short break selected');
	clearInterval(timer);
	(document.querySelector('div.border')).classList = 'border border-green';
	timerLabel.innerText = '05:00';
	timerDescription.innerText = 'Short Break';
	timerInfo.minsSelected = userSettings.minsShortBreak;
	init(userSettings.minsShortBreak);
});

longBreakBtn.addEventListener('click', function() {
	console.log('Long break selected');
	clearInterval(timer);
	(document.querySelector('div.border')).classList = 'border border-green';
	timerLabel.innerText = '15:00';
	timerDescription.innerText = 'Long Break';
	timerInfo.minsSelected = userSettings.minsLongBreak;
	init(userSettings.minsLongBreak);
});

// Event handler for
playBtn.addEventListener('click', function() {
	// toggle play and pause buttons
	playBtn.classList.add('d-none');
	pauseBtn.classList.remove('d-none');

	if(!timerInfo.started) {
		// set timer started to true
		timerInfo.started = true;
	
		timerInfo.minsSelected = timerInfo.mins;
	}

	// asign the setInterval function to execute it
	timer = setInterval(function() {
		console.log('running');
		startTimer();
	}, 1000);
});

pauseBtn.addEventListener('click', function() {
	pauseBtn.classList.add('d-none');
	playBtn.classList.remove('d-none');
	clearInterval(timer);
});

restartBtn.addEventListener('click', function() {
	clearInterval(timer);
	pauseBtn.classList.add('d-none');
	playBtn.classList.remove('d-none');
	timerLabel.innerText = ('0' + timerInfo.minsSelected).slice(-2) + ':00';
	init(timerInfo.minsSelected);
});

function startTimer() {
	// if timer has ended
	if(timerInfo.mins === 0 && timerInfo.secs === 0) {
		clearInterval(timer);
		alarmAudio.play();
		return;
	}

	// if seconds equals 0 
	if(timerInfo.secs === 0) {
		timerInfo.mins--;
		timerInfo.secs = 59;
	} else {
		timerInfo.secs--;
	}

	timeFormat();
}

function timeFormat() {
	document.title = '(' + ('0' + timerInfo.mins).slice(-2) + ':' + ('0' + timerInfo.secs).slice(-2) + ') Pomodoro';
	/* console.log(('0' + timerInfo.mins).slice(-2) + ':' + ('0' + timerInfo.secs).slice(-2)); */
	timerLabel.innerText = ('0' + timerInfo.mins).slice(-2) + ':' + ('0' + timerInfo.secs).slice(-2);
}

function init(mins, secs = 0) {
	timerInfo.mins = mins;
	timerInfo.secs = secs;
	timerInfo.started = false;
}