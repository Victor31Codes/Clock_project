const body = document.querySelector("body");
const fst_list_element = document.querySelector("#fst_list_element");
const list_change_theme = document.querySelector("#snd_list_element");
const sun = document.querySelector(".fa-regular.fa-sun");
const the = document.querySelector("#the_conector");
const of = document.querySelector("#of_conector");
const fst_two = document.querySelector("#fst_two");
const snd_two = document.querySelector("#snd_two");

let date = new Date();
let pHours = document.getElementById("hours"),
  pPMAM = document.getElementById("pmam"),
  pMinutes = document.getElementById("minutes"),
  pSeconds = document.getElementById("seconds"),
  pWeek_day = document.getElementById("week_day"),
  pMonth_day = document.getElementById("month_day"),
  pMonth_year = document.getElementById("month_year"),
  pYear = document.getElementById("year");
let hours = date.getHours(),
  pmam = "",
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  week_day = date.getDay(),
  month_day = date.getDate(),
  month_year = date.getMonth(),
  year = date.getFullYear();

list_change_theme.addEventListener("click", () => {
  body.classList.toggle("change_theme");
  fst_list_element.classList.toggle("change_theme");
  pWeek_day.classList.toggle("change_theme");
  pMonth_day.classList.toggle("change_theme");
  pMonth_year.classList.toggle("change_theme");
  pYear.classList.toggle("change_theme");
  pHours.classList.toggle("change_theme");
  pMinutes.classList.toggle("change_theme");
  pSeconds.classList.toggle("change_theme");
  pPMAM.classList.toggle("change_theme");
  the.classList.toggle("change_theme");
  of.classList.toggle("change_theme");
  fst_two.classList.toggle("change_theme");
  snd_two.classList.toggle("change_theme");

  if (
    sun.classList.contains("fa-regular") &&
    sun.classList.contains("fa-sun") &&
    sun.classList.contains("sun-clr")
  ) {
    sun.classList.remove("fa-regular", "fa-sun", "sun-clr");
    sun.classList.add("fa-regular", "fa-moon", "moon-clr");
  } else {
    sun.classList.remove("fa-regular", "fa-moon", "moon-clr");
    sun.classList.add("fa-regular", "fa-sun", "sun-clr");
  }
});

const updateTime = () => {
  let date = new Date();
  let pHours = document.getElementById("hours"),
    pPMAM = document.getElementById("pmam"),
    pMinutes = document.getElementById("minutes"),
    pSeconds = document.getElementById("seconds"),
    pWeek_day = document.getElementById("week_day"),
    pMonth_day = document.getElementById("month_day"),
    pMonth_year = document.getElementById("month_year"),
    pYear = document.getElementById("year");
  let hours = date.getHours(),
    pmam = "",
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    week_day = date.getDay(),
    month_day = date.getDate(),
    month_year = date.getMonth(),
    year = date.getFullYear();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  pWeek_day.textContent = weekDays[week_day] + ",";
  pMonth_day.textContent = "0" + month_day;
  pMonth_year.textContent = monthYear[month_year];
  pYear.textContent = year;

  if (hours >= 12) {
    pmam = "PM";
  } else {
    pmam = "AM";
  }

  if (hours == 0) {
    hours = 12;
  }
  pHours.textContent = hours;
  pPMAM.textContent = pmam;

  if (minutes < 10) {
    pMinutes.textContent = "0" + minutes;
  } else {
    pMinutes.textContent = minutes;
  }
  if (seconds < 10) {
    pSeconds.textContent = "0" + seconds;
  } else {
    pSeconds.textContent = seconds;
  }
};

updateTime();
setInterval(updateTime, 1000);
