const celsiusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

function cToF(){
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;

    fahrenheitInput,value = fTemp; 
}

function fToC(){
    const fTemp = parseFloat(fahrenheitInput.value);
    console.log(fTemp);
}

celsiusInput.addEventListener('input', cToF);
// fahrenheitInput.addEventListener('input', fToC);

  