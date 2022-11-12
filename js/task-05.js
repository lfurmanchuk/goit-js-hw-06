// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", newInput);

function newInput(event) {
    //console.log(event.currentTarget);
    outputElement.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        outputElement.textContent = 'Anonymous'
    }
}
