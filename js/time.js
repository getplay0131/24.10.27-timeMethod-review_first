const timeCon = document.querySelector(".time-container");
const timesTrack = document.querySelector(".times-track");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".min");
const sec = document.querySelector(".sec");

function timeShow() {
  let time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let secs = String(time.getSeconds()).padStart(2, "0");
  timesTrack.innerHTML = `현재 시각 :  <span class="hour">${hours}</span>시 <span class="min">${mins}</span>분 <span class="sec">${secs}</span>초 입니다! `;
}

setInterval(timeShow, 1000);
