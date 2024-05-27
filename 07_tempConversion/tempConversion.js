

// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.

// Write two functions, `convertToCelsius` and `convertToFahrenheit`:


const convertToCelsius = function(tempInFahrenheit) {
  let celsius = (tempInFahrenheit - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
};


const convertToFahrenheit = function(tempInCelsius) {
  let fahrenheit = tempInCelsius * (9 / 5) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


