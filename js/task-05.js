const inputEl = document.getElementById("name-input");
console.log(inputEl);
const titleOutputEl = document.getElementById("name-output");
function renameOutput(event) {
  if (event.currentTarget.value != false ) {
    titleOutputEl.textContent = event.currentTarget.value;
  } else {
    titleOutputEl.textContent = "Anonymous";
  }
}
inputEl.addEventListener("input", renameOutput);
