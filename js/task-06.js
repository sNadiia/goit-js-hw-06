const inputEl = document.getElementById("validation-input");
const lengthAttribValue = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", oncheckInputValue);
function oncheckInputValue(event) {
  if (event.currentTarget.value.length != lengthAttribValue) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
