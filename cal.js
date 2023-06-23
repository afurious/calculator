const display = document.querySelector ('#display');
const buttons = [...document.querySelectorAll ('button')];

buttons.map (item => {
  item.addEventListener ('click', () => {
    if (item.id == 'clear') {
      display.innerText = '';
    } else if (item.id == 'backspace') {
      let string = display.innerText.toString ();
      display.innerText = string.substr (0, string.length - 1);
    } else if (display.id != '' && item.id == 'equal') {
      display.innerText = eval (display.innerText);
    } else if (display.id == '' && display.id == 'equal') {
      display.innerText = 'Empty!';
      setTimeout (() => (display.innerText = ''), 2000);
    } else {
      display.innerText += item.id;
    }
  });
});

let chan = document.querySelector ('.changes');
let calculator = document.querySelector ('.calculator');
let cha = document.querySelector ('.change ');

let isdark = true;

chan.onclick = () => {
  calculator.classList.toggle ('dark');
};
