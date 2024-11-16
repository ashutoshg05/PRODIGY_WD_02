let timer;
let running = false;
let elapsedTime = 0;
let startTime = 0;
let lapCounter = 0;

function updateDisplay() {
    const display = document.getElementById('display');
    let time = Date.now() - startTime + elapsedTime;
    let hours = Math.floor((time / 3600000) % 60);
    let minutes = Math.floor((time / 60000) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    
    // Format the time for display
    display.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = Date.now();
        timer = setInterval(updateDisplay, 1000);
    }
}

function pauseStopwatch() {
    if (running) {
        running = false;
        elapsedTime += Date.now() - startTime;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById('display').textContent = "00:00:00";
    document.getElementById('laps').innerHTML = "";
    lapCounter = 0;
}

function recordLap() {
    if (running) {
        lapCounter++;
        const lapsList = document.getElementById('laps');
        const lapTime = document.getElementById('display').textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapsList.appendChild(lapItem);
    }
}
