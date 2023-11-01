let userName = ""; // Variable global para almacenar el nombre del usuario

document.addEventListener("DOMContentLoaded", function () {
  userName = prompt("Ingrese su nombre:") || "Invitado";
  alert(`¡Hola, ${userName}! Bienvenido al conversor.`);
  displayWelcomeMessage();
});

function displayWelcomeMessage() {
  const welcomeDiv = document.getElementById("welcomeMessage");
  welcomeDiv.innerHTML = `<p>¡Hola, ${userName}! Bienvenido al conversor.</p>`;
}

// Conversor de Monedas
function convertCurrency() {
  const amount = document.getElementById("amountCurrency").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  // Lógica para obtener tasas de cambio al 26.10.2023
  const exchangeRates = {
    USD: 1,
    MXN: 18.21,
    COP: 4122.5,
    EUR: 0.95,
    JPY: 150.39,
    BRL: 4.99,
    BTC: 0.000029
  };

  const result =
    (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

  const currencyResults = document.getElementById("currencyResults");
  currencyResults.innerHTML = `<li>${userName}, ${amount} ${fromCurrency} son aproximadamente ${result.toFixed(
    2
  )} ${toCurrency}</li>`;
}

// Conversor de Temperatura
function convertTemperature() {
  const temperature = document.getElementById("temperature").value;
  const fromTemperature = document.getElementById("fromTemperature").value;
  const toTemperature = document.getElementById("toTemperature").value;

  let result;

  switch (fromTemperature) {
    case "C":
      result = convertCelsius(temperature, toTemperature);
      break;
    case "F":
      result = convertFahrenheit(temperature, toTemperature);
      break;
    case "K":
      result = convertKelvin(temperature, toTemperature);
      break;
    default:
      result = "Error en la conversión de temperatura";
  }

  const temperatureResults = document.getElementById("temperatureResults");
  temperatureResults.innerHTML = `<li>${userName}, ${temperature}°${fromTemperature} son aproximadamente ${result.toFixed(
    2
  )}°${toTemperature}</li>`;
}

function convertCelsius(value, toUnit) {
  switch (toUnit) {
    case "C":
      return parseFloat(value);
    case "F":
      return (value * 9) / 5 + 32;
    case "K":
      return parseFloat(value) + 273.15;
    default:
      return 0;
  }
}

function convertFahrenheit(value, toUnit) {
  switch (toUnit) {
    case "C":
      return ((value - 32) * 5) / 9;
    case "F":
      return parseFloat(value);
    case "K":
      return ((value - 32) * 5) / 9 + 273.15;
    default:
      return 0;
  }
}

function convertKelvin(value, toUnit) {
  switch (toUnit) {
    case "C":
      return parseFloat(value) - 273.15;
    case "F":
      return ((value - 273.15) * 9) / 5 + 32;
    case "K":
      return parseFloat(value);
    default:
      return 0;
  }
}
