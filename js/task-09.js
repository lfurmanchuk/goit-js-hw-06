// Напиши скрипт, який змінює кольори фону елемента <body> через
// інлайн - стиль по кліку на button.change - color і виводить 
// значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію 
// getRandomHexColor.

const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}