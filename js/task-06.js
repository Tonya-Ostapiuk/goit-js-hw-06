let inputEl = document.querySelector('#validation-input');
let inputLeng = inputEl.dataset.length;
const inputText = document.querySelector('input');

inputEl.addEventListener('change', event => {
    if (event.target.value.length === +inputLeng) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});