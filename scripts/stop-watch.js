// Convert time to a format of hours, minutes, seconds, and milliseconds
function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below
let isPlaying = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML
function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions
function start() {
  if (!isPlaying) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    isPlaying = true;
    document.getElementById("play-pause-Button").innerHTML = "Pause";
  } else {
    clearInterval(timerInterval);
    isPlaying = false;
    document.getElementById("play-pause-Button").innerHTML = "Play";
  }
}

function reset() {
  isPlaying = false;
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  document.getElementById("play-pause-Button").innerHTML = "Play";
}

// Create event listeners
let playPauseButton = document.getElementById("play-pause-Button");
let resetButton = document.getElementById("resetButton");

playPauseButton.addEventListener("click", start);
resetButton.addEventListener("click", () => {
  reset();
});
