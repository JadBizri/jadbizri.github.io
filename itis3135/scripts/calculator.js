const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.buttons');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate(button.value));
});