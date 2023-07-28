// Date Counter
let counterDown = new Date("Dec 31,2023 23:59:59");
setInterval(() => {
  let dateNow = new Date();
  let dateDiff = counterDown - dateNow;
  let days = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.trunc((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.trunc((dateDiff % (1000 * 60)) / 1000);
  document.querySelectorAll(".days span")[0].innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelectorAll(".hours span")[0].innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelectorAll(".minute span")[0].innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelectorAll(".sec span")[0].innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Skills progress
let skillSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

document.addEventListener("scroll", function () {
  if (window.scrollY >= skillSection.offsetTop - 450) {
    spans.forEach((span) => {
      console.log(true);
      span.style.width = span.dataset.progress;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = `0`;
    });
  }
});

// Stats Counter
let nums = document.querySelectorAll(".box h2");
let statsSection = document.querySelector(".stats");
let started = true;
document.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (started) {
      nums.forEach((num) => startCount(num));
    }
    started = false;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/* Dark Mode */

let inputCheckbox = document.querySelector(".switch input");

inputCheckbox.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
