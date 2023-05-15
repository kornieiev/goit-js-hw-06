/*
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const defaultOutputValue = textOutput.textContent.trim();

textInput.addEventListener("input", () => {
  const inputValue = textInput.value.trim();
  if (inputValue) {
    textOutput.textContent = inputValue;
  } else {
    textOutput.textContent = defaultOutputValue;
  }
});
