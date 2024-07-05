// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const hourHandElement = document.getElementById('hour-hand');
const minuteHandElement = document.getElementById('minute-hand');
const secondHandElement = document.getElementById('second-hand');
const rootStyles = document.documentElement.style;

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  minutesElement.textContent = minutes;
  hoursElement.textContent = hours;
  dayOfWeekElement.textContent = dayOfWeek[date.getDate()];
  dayElement.textContent = date.getDay();
  monthElement.textContent = months[date.getMonth()];
  yearElement.textContent = date.getFullYear();

  minutesElement.textContent = fixTime(date.getMinutes());
  hoursElement.textContent = fixTime(date.getHours());

  const minutesDegrees = minutes * 6 + seconds / 10;
  const hoursDegrees = hours * 6 + seconds / 10;

  rootStyles.setProperty('--seconds-rotate', seconds * 6 + 'deg');
  rootStyles.setProperty('--minutes-rotate', minutesDegrees + 'deg');
  rootStyles.setProperty('--hours-rotate', hoursDegrees + 'deg');
};

updateClock();

setInterval(updateClock, 1000);
