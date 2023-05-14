/*
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. В результате при перетаскивании 
ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const rangeEl = document.querySelector("#font-size-control");
// console.dir(rangeEl.value);

const textEl = document.querySelector("#text");
// console.dir(textEl);

rangeEl.addEventListener("input", function () {
  textEl.style.fontSize = this.value + "px";
});
