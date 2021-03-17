let p = document.querySelector('p');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

let startTime = Date.now();
let elapsedTime = Date.now() - startTime;
p.textContent = timeString(elapsedTime);

function timeString(time) {
    time /= 1000; // convert to seconds
    let hours = Math.floor(time / 3600);
    time %= 3600;
    let minutes = Math.floor(time / 60);
    time %= 60;
    let seconds = Math.floor(time);

    hoursString = (hours < 10) ? `0${hours}` : `${hours}`;
    minutesString = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    secondsString = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    return `${hoursString}:${minutesString}:${secondsString}`;
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    p.textContent = timeString(elapsedTime);
}

let stopwatch;
let stopwatchRunning = false;

function startStopwatch() {
    if (!stopwatchRunning) {
        // update startTime to compensate for any elapsed time during a stop
        startTime = Date.now() - elapsedTime;
        stopwatch = setInterval(updateTime, 10);
        stopwatchRunning = true;
    }
}

function stopStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatch);
        stopwatchRunning = false;
    }
}

function resetStopwatch() {
    startTime = Date.now();
    updateTime();
    stopStopwatch();
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

