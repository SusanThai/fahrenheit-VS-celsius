const celsiusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

function roundNum(num){
    return Math.round(num*100)/100;
}

function celsiusToFahrenheit(){
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * (9/5)) + 32;

    fahrenheitInput.value = roundNum(fahrenheit); 
}

function fahrenheitToCelsius(){
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * (5/9);
    
    celsiusInput.value = roundNum(celsius);
}

function main(){
celsiusInput.addEventListener('input', celsiusToFahrenheit);
fahrenheitInput.addEventListener('input',fahrenheitToCelsius);
}

main();

  