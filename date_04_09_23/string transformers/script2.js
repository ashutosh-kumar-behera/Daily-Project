// const userInput = document.getElementById("userInput");

// const lowerCaseEl = document.getElementById("lowercase");
// const upperCaseEl = document.getElementById("uppercase");
// const camelCaseEl = document.getElementById("camelcase");
// const pascalCaseEl = document.getElementById("pascalcase");
// const snakeCaseEl = document.getElementById("snakecase");
// const kebabCaseEl = document.getElementById("kebabcase");
// const titleCaseEl = document.getElementById("titlecase");
// const trimEl = document.getElementById("trim");

function transform({ text = userInput.value.trim() }) {
  const camelCase = text
    .toLowerCase()
    .split(" ")
    .reduce((a, b) => a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase());

  lowerCaseEl.textContent = text.toLowerCase();
  upperCaseEl.textContent = text.toUpperCase();
  camelCaseEl.textContent = camelCase;
  pascalCaseEl.textContent = camelCase
    ? camelCase[0]?.toUpperCase() + camelCase.substring(1)
    : "";
  snakeCaseEl.textContent = text.split(" ").join("_");
  kebabCaseEl.textContent = text.split(" ").join("-");
  trimEl.textContent = text.split(" ").join("");
}

userInput.addEventListener("input", transform);
transform({});










const input = document.querySelector("input");

const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

function capitalizeString(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function camelCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function pascalCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function snakeCase(str) {
  return str.replaceAll(" ", "_");
}

function kebabCase(str) {
  return str.replaceAll(" ", "-");
}

function trim(str) {
  return str.replaceAll(" ", "");
}

function updateScreen() {
  lowerCaseOutput.innerText = input.value.trim().toLowerCase();
  upperCaseOutput.innerText = input.value.trim().toUpperCase();
  camelCaseOutput.innerText = camelCase(input.value.trim());
  pascalCaseOutput.innerText = pascalCase(input.value.trim());
  snakeCaseOutput.innerText = snakeCase(input.value.trim());
  kebabCaseOutput.innerText = kebabCase(input.value.trim());
  trimOutput.innerText = trim(input.value.trim());
}

updateScreen();

input.addEventListener("input", updateScreen);