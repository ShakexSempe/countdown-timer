const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 5, 8, 12, 30, 30, 500);



const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

//display on DOM: 
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${mins}pm`

//future time in ms 
const futureTime = futureDate.getTime();


getRemainingTime = () => {
  const today = new Date().getTime();
  const time = futureTime - today;
  
  //values in miliseconds
  //24hr * 60m * 60s *1000ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000; 
  //calculate all values 
  let days = time / oneDay;
  days = Math.floor(days);
  let hours = time / oneHour;
  
}

getRemainingTime();