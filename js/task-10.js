function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

const createBoxes = amount => {
  const toAddEl = [];
  for (let i = 0; i < amount; i++){
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    toAddEl.push(div);
  };
  return toAddEl;
};

createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxesDiv.append(...boxesToAdd);
});
  
destroyBtn.addEventListener('click', () => {
  boxesDiv.innerHTML = '';
});

