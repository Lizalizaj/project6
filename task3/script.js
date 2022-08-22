const trafficLightEl = document.querySelector('#trafficLight');


function makeGreen() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

const trafficLightE2 = document.querySelector('#trafficLight');
function makeYellow() {
    trafficLightE2.style.background = ('red');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}

trafficLightE2.addEventListener('click', makeYellow);
const trafficLightE3 = document.querySelector('#trafficLight');
function makeRed() {
    trafficLightE3.style.background = ('green');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click',makeGreen);
}

trafficLightE3.addEventListener('click', makeRed);