function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const variableColor =document.querySelector('.color');

changeBtn.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  variableColor.textContent = newColor;
});
