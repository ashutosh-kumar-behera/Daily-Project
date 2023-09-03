const count = document.querySelector(".count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const changeBy = document.querySelector("#changeBy");
const reset = document.querySelector(".reset");

increment.addEventListener("click", function () {
  count.innerHTML = +count.innerHTML + changeBy.valueAsNumber;
});

decrement.addEventListener("click", () => {
  count.textContent = parseInt(count.textContent) - Number(changeBy.value);
});

changeBy.addEventListener("change", function () {
  if (changeBy.value <= 0) {
    // changeBy.valueAsNumber = 1;
    changeBy.value = 1;
  }
});

reset.addEventListener("click", function () {
  count.innerHTML = 0;
  changeBy.valueAsNumber = 1;
});
