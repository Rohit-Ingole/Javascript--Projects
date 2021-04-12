const colors = [
  "Tomato",
  "Orange",
  "DodgerBlue",
  "MediumSeaGreen",
  "Gray",
  "SlateBlue",
  "Violet",
  "LightGray",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(colors);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(colors) {
  return Math.floor(Math.random() * colors.length);
}
