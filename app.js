const colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "black",
  "pink",
  "white",
  "gray",
  "brown",
  "orange",
  "purple",
];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const usedColors = [];

btn.addEventListener("click", () => {
  let availableColors = colors.filter((color) => !usedColors.includes(color));

  if (availableColors.length === 0) {
    usedColors.length = 0; // إعادة تعيين القائمة عند الضغط على كل الألوان
    availableColors = colors;
  }

  const randomNumber = Math.floor(Math.random() * availableColors.length);
  const selectedColor = availableColors[randomNumber];

  usedColors.push(selectedColor);

  document.body.style.backgroundColor = selectedColor;
  color.textContent = selectedColor;
});
