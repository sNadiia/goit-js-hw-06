const inputRangeEl = document.getElementById("font-size-control");
const textToChangeEl = document.getElementById("text");

inputRangeEl.addEventListener("input", onTextSizeChange);
function onTextSizeChange(event) {
  console.dir(event.currentTarget.value);
  textToChangeEl.style.fontSize = `${event.currentTarget.value}px`;
}
