const timeDisplay = document.querySelector("#time");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let isRuning = false;

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

function pad(num, digit = 2) {
  return num.toString().padStart(digit, "0");
}

function formatTime(ms) {
  const milliseconds = ms % 1000;
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;
  console.log("elapsedTime :>> ", elapsedTime);
  timeDisplay.textContent = formatTime(elapsedTime);
}
// console.log("Date.now() :>> ", Date.now());

function start() {
  //   console.log("start :>> ");
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  //   console.log("startTime :>> ", startTime);
  isRuning = true;
}
function pause() {
  //   console.log("pause :>> ");
  if (isRuning) {
    clearInterval(intervalId);
    isRuning = false;
  }
}
function reset() {
  //   console.log("reset :>> ");
  clearInterval(intervalId);
  elapsedTime = 0;
  isRuning = false;
  timeDisplay.textContent = "00:00:00.00";
}
