let timerDisplay = document.querySelector('.timerDisplay')
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let secs = 00;
let mins = 00;
let hrs = 00;

let timerId = null;

// Start button functionality
startBtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

// Stop button functionality
stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

// Reset button functionality
resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    secs = mins = hrs = 0;
    timerDisplay.innerHTML = '00 : 00 : 00';
});

function startTimer() {
    secs++;
    if (secs == 100) {
        secs = 0;
        mins++;
        if (mins == 60) {
            mins = 0;
            hrs++;
        }
    }

    // Update timer display
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;

    timerDisplay.innerHTML = `${hrsString} : ${minsString} : ${secsString}`;
}
