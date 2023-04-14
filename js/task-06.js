const inputEl = document.getElementById("validation-input");
const lengthAttribValue = inputEl.getAttribute("data-length");


inputEl.addEventListener("blur", oncheckInputValue);
function oncheckInputValue(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length != lengthAttribValue) {
    console.log(1);
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    console.log(0);
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}
