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

// Audio tag
let alarmAudio = document.querySelector('#alarm-audio');

// Even handler for 'WORK' button
workBtn.addEventListener('click', function() {
    // Toggle play and pause buttons
    togglePausePlay(true);
    // Clear the interval when the type of event change
    clearInterval(timer);
    // Change the border color to match the desired type of event
    (document.querySelector('div.border')).classList = 'border border-red';
    // Define the text label for the timer according to the specific time
    timerLabel.innerText = '25:00';
    // Define the text description label for the specific type of event
    timerDescription.innerText = 'Work';
    document.title = 'Pomodoro';
    // Get the time configuracion for this specific event
    // TODO: Support to save configuration with local_storage API
    timerInfo.minsSelected = userSettings.minsWork;
    // Initialize the timer information with the right time to countdown
	init(userSettings.minsWork);
});

// Event handler for 'SHORT BREAK' button
shortBreakBtn.addEventListener('click', function() {
    // Toggle play and pause buttons
    togglePausePlay(true);
    // Clear the interval when the type of event change
    clearInterval(timer);
    // Change the border color to match the desired type of event
    (document.querySelector('div.border')).classList = 'border border-green';
    // Define the text label for the timer according to the specific time
    timerLabel.innerText = '05:00';
    // Define the text description label for the specific type of event
    timerDescription.innerText = 'Short Break';
    document.title = 'Pomodoro';
    // Get the time configuracion for this specific event
    // TODO: Support to save configuration with local_storage API
    timerInfo.minsSelected = userSettings.minsShortBreak;
    // Initialize the timer information with the right time to countdown
	init(userSettings.minsShortBreak);
});

// Event handler for 'LONG BREAK' button
longBreakBtn.addEventListener('click', function() {
    // Toggle play and pause buttons
    togglePausePlay(true);
    // Clear the interval when the type of event change
    clearInterval(timer);
    // Change the border color to match the desired type of event
    (document.querySelector('div.border')).classList = 'border border-green';
    // Define the text label for the timer according to the specific time
    timerLabel.innerText = '15:00';
    // Define the text description label for the specific type of event
    timerDescription.innerText = 'Long Break';
    document.title = 'Pomodoro';
    // Get the time configuracion for this specific event
    // TODO: Support to save configuration with local_storage API
    timerInfo.minsSelected = userSettings.minsLongBreak;
    // Initialize the timer information with the right time to countdown
	init(userSettings.minsLongBreak);
});

// Event handler to start the timer countdown
playBtn.addEventListener('click', function() {
	// Toggle play and pause buttons
	togglePausePlay();

    // If timer has not started
	if(!timerInfo.started) {
		// Set timer started to true
		timerInfo.started = true;
    
        // Get the right mins to start the countdown
		timerInfo.minsSelected = timerInfo.mins;
	}

	// asign the setInterval function to execute it
	timer = setInterval(function() {
		startTimer();
	}, 1000);
});

// Event handler to pause the timer countdown
pauseBtn.addEventListener('click', function() {
    // Toggle play and pause buttons
	togglePausePlay();
    // Stop the timer
    // We don't change any configuration here,
    // so when we hit the play button again it will start where it was
	clearInterval(timer);
});

restartBtn.addEventListener('click', function() {
    // Stop the timer
    clearInterval(timer);
    // Toggle play and pause buttons
    togglePausePlay(true);
    document.title = 'Pomodoro';
    // Change the timer text label by formating the mins configuration
    timerLabel.innerText = ('0' + timerInfo.minsSelected).slice(-2) + ':00';
    // Initialize the timer information with the right time to countdown
	init(timerInfo.minsSelected);
});

// Function in charge to start the timer according the specified configuration
function startTimer() {
    // If timer has ended
    // Stop the timer, play the alarm and toggle the buttons so the user can start the timer again
    // Then exit the function
	if(timerInfo.mins === 0 && timerInfo.secs === 0) {
		clearInterval(timer);
        alarmAudio.play();
        togglePausePlay();
        init(timerInfo.minsSelected);
        document.title = 'Pomodoro';
		return;
	}

    // If seconds equals 0, it means that a minute has passed
    // so we decrease the minute countdown by 1
    // and set the seconds cout to 59
	if(timerInfo.secs === 0) {
		timerInfo.mins--;
		timerInfo.secs = 59;
	} else {
        // If seconds hasn't reach the countdown to 0
        // decrease it by 1
		timerInfo.secs--;
	}
    
    // Every second this function is executed
    // we need to change the timer text label
	timeFormat();
}

// Function to format the timer displayed to the user
function timeFormat() {
	document.title = '(' + ('0' + timerInfo.mins).slice(-2) + ':' + ('0' + timerInfo.secs).slice(-2) + ') Pomodoro';
	timerLabel.innerText = ('0' + timerInfo.mins).slice(-2) + ':' + ('0' + timerInfo.secs).slice(-2);
}

// Function in charge to initialize the timer configuration to do the countdown
// This function needs the mins parameter in order to work
function init(mins, secs = 0) {
	timerInfo.mins = mins;
	timerInfo.secs = secs;
	timerInfo.started = false;
}

// Function to toggle play and pause buttons and avoid repetitive code
// This function has and optional parameter to display the play button first when the type of event buttons are clicked
function togglePausePlay(mainBtn=false) {
    if(mainBtn) {
        pauseBtn.classList.add('d-none');
        playBtn.classList.remove('d-none');
    } else {
        pauseBtn.classList.toggle('d-none');
        playBtn.classList.toggle('d-none');
    }
}