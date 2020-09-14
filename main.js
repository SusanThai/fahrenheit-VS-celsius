const celsiusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

function roundNum(num){
    return Math.round(num*100)/100;
}

function cToF(){
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;

    fahrenheitInput.value = roundNum(fTemp); 
}

function fToC(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    
    celsiusInput.value = roundNum(cTemp);
}

function main(){
celsiusInput.addEventListener('input', cToF);
fahrenheitInput.addEventListener('input',fToC);
}

main();

  