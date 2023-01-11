const inputSize = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputSize.addEventListener ('change', event => {
   
    abracadabra.style.fontSize = event.target.value + "px";
})


