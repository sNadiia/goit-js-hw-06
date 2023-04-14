const buttonChangeColor = document.querySelector(".change-color");
const currentColorValue = document.querySelector(".color");
const body = document.querySelector("body");

buttonChangeColor.addEventListener("click", onClickButton);
function onClickButton(event) {
  body.style.backgroundColor = getRandomHexColor();
  currentColorValue.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
