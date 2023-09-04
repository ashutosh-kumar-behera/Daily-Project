const input = document.querySelector("input");

const lowerCase = document.querySelector(".lowercase");
const upperCase = document.querySelector(".uppercase");
const camelCase = document.querySelector(".camelcase");
const pascalCase = document.querySelector(".pascalcase");
const snakeCase = document.querySelector(".snakecase");
const kebabCase = document.querySelector(".kebabcase");
const trimCase = document.querySelector(".trim");

input.addEventListener("input", function (e) {
  const inputValue = e.target.value;

  const camel = inputValue
    .toLowerCase()
    .split(" ")
    .reduce(
      (acc, curr) => acc + (curr.charAt(0).toUpperCase() + curr.slice(1))
    );

  lowerCase.textContent = inputValue.toLowerCase();
  upperCase.textContent = inputValue.toUpperCase();
  camelCase.textContent = camel;
  pascalCase.textContent = camel.charAt(0).toUpperCase() + camel.slice(1);
  snakeCase.textContent = inputValue.split(" ").join("_");
  kebabCase.textContent = inputValue.split(" ").join("-");
  trimCase.textContent = inputValue.split(" ").join("");
});