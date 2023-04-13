const decrBtn = document.querySelector("button[data-action=decrement]");
const incrBtn = document.querySelector("button[data-action=increment]");
const valueEl = document.querySelector("#value");

const handleClickDecrBtn = (event) => {
  console.log("-");
  valueEl.textContent = Number(valueEl.textContent) - 1;
};
const handleClickIncrBtn = (event) => {
  console.log("+");
  valueEl.textContent = Number(valueEl.textContent) + 1;
};
decrBtn.addEventListener("click", handleClickDecrBtn);
incrBtn.addEventListener("click", handleClickIncrBtn);
