const generator = document.querySelector(".generator");
const colorCircle = document.querySelector(".color__circle");
const colorName = document.querySelector(".color__name");

function numberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorGenerator() {
  const firstValue = numberGenerator(0, 255);
  const secondValue = numberGenerator(0, 255);
  const thirdValue = numberGenerator(0, 255);

  colorCircle.style.background = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`;
  colorName.innerText = `RGB (${firstValue}, ${secondValue}, ${thirdValue})`;
}

generator.addEventListener("click", colorGenerator);
