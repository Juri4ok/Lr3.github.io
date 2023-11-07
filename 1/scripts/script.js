function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let fahrenheitInput = document.getElementById("fahrenheit");
let celsiusInput = document.getElementById("celsius");
fahrenheitInput.addEventListener('input', function () {
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        let celsiusValue = fahrenheitToCelsius(fahrenheitValue);
        celsiusInput.value = celsiusValue.toFixed(2);
        console.log(1);
    }
});
celsiusInput.addEventListener('input', function () {
    let celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        let fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
});