const inputEl = document.getElementById("name-input");
const titleOutputEl = document.getElementById("name-output");
function renameOutput(event) {
  if (event.currentTarget.value == 0) {
    titleOutputEl.textContent = Anonymous;
  } else {
    titleOutputEl.textContent = event.currentTarget.value;
  }
}
inputEl.addEventListener("input", renameOutput);
