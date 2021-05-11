const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const calculations = ['+', '-', '*', '/'];
buttons.forEach((item) => {
    item.onclick = () => {
        display.classList.remove('animated');
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if ((item.id === 'equal' && calculations.includes(display.innerText[display.innerText.length - 1])) || (display.innerText === '' && item.id === 'equal')) {
            display.classList.add('animated')
        } else if (display.innerText !== '' && item.id === 'equal') {
            display.innerText = eval(display.innerText);
            display.classList.add('animated')
        } else if (calculations.includes(item.id) && calculations.includes(display.innerText[display.innerText.length - 1])) {
            display.innerText = display.innerText.substring(0, display.innerText.length - 1) + item.id;
        } else {
            display.innerText += item.id;
        }
        if (display.innerText.length > 16) display.innerText = display.innerText.substring(0, 16);
    };
});

