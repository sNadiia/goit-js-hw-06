const inputEl = document.getElementById("name-input");
const titleOutputEl = document.getElementById("name-output");
function renameOutput(event) {
  titleOutputEl.textContent = event.currentTarget.value;
}
inputEl.addEventListener("input", renameOutput);
