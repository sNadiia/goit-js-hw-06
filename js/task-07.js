const inputRangeEl = document.getElementById("font-size-control");
const textToChangeEl = document.getElementById("text");

inputRangeEl.addEventListener("input", onTextSizeChange);
function onTextSizeChange(event) {
  textToChangeEl.style.fontSize = `${event.currentTarget.value}px`;
}
