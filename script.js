// Select elements
const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const temp = parseFloat(tempInput.value);
  const unit = unitSelect.value;

  if (isNaN(temp)) {
    result.textContent = "⚠️ Please enter a valid number!";
    result.style.color = "red";
    return;
  }

  let convertedTemp = "";
  let convertedUnit = "";

  if (unit === "Celsius") {
    convertedTemp = (temp * 9) / 5 + 32;
    convertedUnit = "Fahrenheit (°F)";
  } else if (unit === "Fahrenheit") {
    convertedTemp = ((temp - 32) * 5) / 9;
    convertedUnit = "Celsius (°C)";
  } else if (unit === "Kelvin") {
    convertedTemp = temp - 273.15;
    convertedUnit = "Celsius (°C)";
  }

  result.style.color = "#333";
  result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
});
