
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;


const startBtn = document.querySelector('button');
const showTime = document.querySelectorAll('.value');
const inputTime = document.querySelector("#datetime-picker");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
   const timeValid = userSelectedDate - options.defaultDate;
    if (timeValid < 1) {
      iziToast.error({ 
        position: 'topCenter',
        message: `Please choose a date in the future`
      });
      startBtn.disabled = true; 
    } else {
      startBtn.disabled = false;
      inputTime.disabled = true; 
      
    }
  },
};

//==============================================

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.disabled = true;

flatpickr("#datetime-picker", options);

// startBtn.disabled = false;

startBtn.addEventListener('click', event => {
  const intervalId = setInterval(() => {
     
    let timeInterval = userSelectedDate - new Date();
  
    if (timeInterval < 1) {

      clearInterval(intervalId);
      return;
    }
    startBtn.disabled = true;
    inputTime.disabled = true;
    //ДЗ ! Після запуску таймера натисканням кнопки Старт кнопка Старт і інпут стають неактивним, щоб користувач не міг обрати нову дату, поки йде відлік часу. Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його — необхідно перезавантажити сторінку. 

    const timer = convertMs(timeInterval);
    

    showTime[0].textContent = timer.days.toString().padStart(2, '0');
    showTime[1].textContent= timer.hours.toString().padStart(2, '0');
    showTime[2].textContent = timer.minutes.toString().padStart(2, '0');
    showTime[3].textContent = timer.seconds.toString().padStart(2, '0');
  }, 1000);
  
});



