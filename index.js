const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorID = 0;
let interval = null;

refs.start.addEventListener('click', startChangingColor);
refs.stop.addEventListener('click', stopChangingColor);

function startChangingColor() {
  if (!refs.start.disabled) {
    interval = setInterval(() => {
      colorID = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = colors[colorID];
    }, 1000);
    refs.start.disabled = true;
    refs.stop.disabled = false;
  }
}

function stopChangingColor() {
  if (!refs.stop.disabled) {
    clearInterval(interval);
    refs.start.disabled = false;
    refs.stop.disabled = true;
  }
}
