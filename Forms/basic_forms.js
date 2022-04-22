const submit = document.querySelector('.submit');
const color = document.querySelector('#color');
const display = document.querySelector('.color-display');

const displayColor = function(){
    display.textContent = color.value;
}

submit.addEventListener("click", displayColor);