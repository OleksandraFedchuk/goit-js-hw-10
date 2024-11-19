import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    validateDate();
  },

};

flatpickr('#datetime-picker' , options);

const elements = {
  timer: document.querySelector('.timer'),
  days : document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes : document.querySelector('span[data-minutes]'),
  seconds : document.querySelector('span[data-secondrs]'),
  button: document.querySelector('button[data-start]'),
  picker: document.querySelector('#datetime-picker'),
}

let userSelectedDate = null ; 

function validateDate(){
  if (userSelectedDate < Date.now()){
    iziToast.show({
      message: "Please choose a date in the future",
      position: "topCenter",
      closeOnEscape: true,
      closeOnClick: true,
    });
    elements.button = true;
  } else {
    elements.button = false;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerFace({days, hours, minutes, seconds}) {
  elements.days = addLeadingZero(days);
  elements.hours = addLeadingZero(hours);
  elements.minutes = addLeadingZero(minutes);
  elements.seconds = addLeadingZero(seconds);
};

let countInterval = null; 

function startCount() {
  countInterval = setInterval(() => {
const delta = userSelectedDate - Date.now() ;

if (delta <= 0){
  clearInterval(countInterval);
  updateTimerFace({ days: "00", hours: "00", seconds: "00"});
  elements.button = true; 
  elements.picker = false;
  return;
}
const time = convertMs(delta);
updateTimerFace(time);
  }, 1000);
}

elements.button.addEventListener("click", () => {
if(!userSelectedDate)
  return;

if(countInterval){
  clearInterval(countInterval);
}

elements.picker = true ;
elements.button = true;

startCount();
  
});








  












