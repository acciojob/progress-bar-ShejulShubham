//your JS code here. If required.
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circleList = document.querySelectorAll(".circle");
let step = 0;
let initial = 1;
let limit = 4;

const circleArr = [];

circleList.forEach((c) => {
circleArr.push(c);
});

function next() {
if (step >= limit) {
  return;
}

step++;

if (step == 1) {
  prevBtn.disabled = false;
}

if (step == 4) {
  nextBtn.disabled = true;
}

circleArr[step].classList.add("active");
}

function prev() {
if (step)
  if (step == 4) {
	nextBtn.disabled = false;
  }

if (step == 1) {
  prevBtn.disabled = true;
}

circleArr[step].classList.remove("active");

step--;
}

nextBtn.addEventListener("click", () => {
next();
});

prevBtn.addEventListener("click", () => {
prev();
});