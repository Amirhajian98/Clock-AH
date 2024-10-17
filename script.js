// Writer : @PHPLOL
// Open in : @Cristal_Team - @Fiber_Team
const secondsDiv = document.querySelector('.clock__analog--seconds');
const minutesDiv = document.querySelector('.clock__analog--minutes');
const hoursDiv = document.querySelector('.clock__analog--hours');
const yearDiv01 = document.querySelector('.clock__year--01');
const yearDiv02 = document.querySelector('.clock__year--02');
const yearDiv03 = document.querySelector('.clock__year--03');
const yearDiv04 = document.querySelector('.clock__year--04');
const monthDiv01 = document.querySelector('.clock__month--01');
const monthDiv02 = document.querySelector('.clock__month--02');
const monthDiv03 = document.querySelector('.clock__month--03');
const dayLettersDiv01 = document.querySelector('.clock__day-letters--01');
const dayLettersDiv02 = document.querySelector('.clock__day-letters--02');
const dayLettersDiv03 = document.querySelector('.clock__day-letters--03');
const dayNumDiv01 = document.querySelector('.clock__day-numbers--01');
const dayNumDiv02 = document.querySelector('.clock__day-numbers--02');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 360 / 60 + 90;
    secondsDiv.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 360 / 60 + 90;
    minutesDiv.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = hours * 360 / 12 + 90;
    hoursDiv.style.transform = `rotate(${hoursDegrees}deg)`;

    const year = now.getFullYear();
    yearDiv01.innerText = (year + '')[0];
    yearDiv02.innerText = (year + '')[1];
    yearDiv03.innerText = (year + '')[2];
    yearDiv04.innerText = (year + '')[3];


    const month = new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(now).split('.')[0].toUpperCase();
    monthDiv01.innerText = month[0];
    monthDiv02.innerText = month[1];
    monthDiv03.innerText = month[2];

    const dayLetters = new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(now).split('.')[0].toUpperCase();
    dayLettersDiv01.innerText = dayLetters[0];
    dayLettersDiv02.innerText = dayLetters[1];
    dayLettersDiv03.innerText = dayLetters[2];

    const dayNum = now.getUTCDate();
    if (dayNum.toString().length == 1) {
        dayNumDiv01.innerText = '0';
        dayNumDiv02.innerText = (dayNum + '');
    } else {
        dayNumDiv01.innerText = (dayNum + '')[0];
        dayNumDiv02.innerText = (dayNum + '')[1];
    }
}

setInterval(setDate, 1000);
// Writer : @PHPLOL
// Open in : @Cristal_Team - @Fiber_Team