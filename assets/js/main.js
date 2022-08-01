let button = document.getElementById("dark-mode");
let body = document.querySelector("body");
let title = document.querySelector("h1");
let paragraphe = document.querySelector("p");

console.log(button, body);

const darkMode = () => {
  body.classList.remove("bg-white");
  body.classList.add("dark-bg-black");
  title.classList.remove("text-black");
  title.classList.add("text-white");
  paragraphe.classList.remove("text-black");
  paragraphe.classList.add("text-white");
};
button.addEventListener("click", darkMode);

const sum = (value1, value2) => {
  return value1 + value2;
};
// sum(1, 2)
console.log(sum(1, 2));

// CALCULATE

let results = document.getElementById("results");
// console.log(results);
let sumResults = sum(1, 2);
// results.innerHTML = "ceci est resultat" + sumResults;
results.innerHTML = `ceci est resultat = ${sumResults}`;

let submitBtn = document.getElementById("submit-button");
let input1 = document.getElementById("value1");
let input2 = document.getElementById("value2");

const calculate = () => {
  let results1 = parseInt(input1.value);
  let results2 = parseInt(input2.value);
  let total = (results1 += results2);
  results.innerHTML = "resultat : " + total;
};
submitBtn.addEventListener("click", calculate);
