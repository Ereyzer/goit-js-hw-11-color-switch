
import colors from './colors';

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
}


let intervalId ; 
refs.start.addEventListener('click', onStartClick);
const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getColor = i => colors[i];
const makeColor = () =>refs.body.style.backgroundColor = getColor(randomIntegerFromInterval(0, 5));

function onStartClick(ev) {
    refs.stop.addEventListener('click', onStopClick);
    refs.start.removeEventListener('click', onStartClick);
    intervalId = setInterval(makeColor,
        1000)
};

function onStopClick(ev) {
    refs.start.addEventListener('click', onStartClick);
    refs.stop.removeEventListener('click', onStopClick);
    clearInterval(intervalId);
}


