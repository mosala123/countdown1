let countDown = new Date("January 1,2025 23:59:59").getTime();

let counter = setInterval(() => {
  let countnow = new Date().getTime();

  let datadiff = countDown - countnow;

  let days = Math.floor(datadiff / (1000 * 60 * 60 * 24));
  let hourse = Math.floor((datadiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minute = Math.floor((datadiff % (1000 * 60 * 60)) / 1000 / 60);
  let second = Math.floor((datadiff % (1000 * 60)) / 1000);

  if (datadiff < 0) {
    clearTimeout(counter);
  }

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hourse").innerHTML = hourse;
  document.querySelector(".minute").innerHTML =
    minute < 10 ? `0${minute}` : minute;
  document.querySelector(".second").innerHTML =
    second < 10 ? `0${second}` : second;
}, 1000);
