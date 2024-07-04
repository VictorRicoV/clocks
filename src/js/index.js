// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const fixTime = number => (number < 10 ? '0' + number : number);

const updateClock = () => {
  const date = new Date();
  minutesElement.textContent = date.getSeconds();
  hoursElement.textContent = date.getHours();
  dayOfWeekElement.textContent = dayOfWeek[date.getDate()];
  dayElement.textContent = date.getDay();
  monthElement.textContent = months[date.getMonth()];
  yearElement.textContent = date.getFullYear();

  minutesElement.textContent = fixTime(date.getMinutes());
  hoursElement.textContent = fixTime(date.getHours());
};

updateClock();

setInterval(updateClock, 1000);
