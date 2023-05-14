/*
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const textInput = document.querySelector("#name-input");
// console.log(textInput);
const textOutput = document.querySelector("#name-output");
// console.log(textOutput);
const defaultOutputValue = textOutput.textContent.trim();
// console.log("defaultOutputValue:", defaultOutputValue);

textInput.addEventListener("input", () => {
  const inputValue = textInput.value;
  if (inputValue) {
    textOutput.textContent = inputValue;
  } else {
    textOutput.textContent = defaultOutputValue;
  }
  // console.log("textOutput", textOutput);
  // console.log("inputValue", inputValue);
});

textInput.addEventListener("blur", () => {
  if (!textInput.value) {
    textOutput.textContent = defaultOutputValue;
  }
});

// console.log("textOutput.textContent", textOutput.textContent);
