/*
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и 
уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Создай переменную counterValue в которой будет храниться текущее значение 
счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
значение счетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

//

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  // console.log("click-dec");
  counterValue.decrement();
  // console.log(counterValue);
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  // console.log("click-inc");
  counterValue.increment();
  // console.log(counterValue);
  valueEl.textContent = counterValue.value;
});
