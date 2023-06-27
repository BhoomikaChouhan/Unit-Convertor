
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convert-btn");
    const output = document.getElementById("output");

    // Function to convert temperature
    function convertTemperature(temperature, fromUnit, toUnit) {
      if (fromUnit === toUnit) {
        return temperature;
      }

      if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
          return (temperature * 9 / 5) + 32;
        } else if (toUnit === "kelvin") {
          return temperature + 273.15;
        }
      } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
          return (temperature - 32) * 5 / 9;
        } else if (toUnit === "kelvin") {
          return (temperature - 32) * 5 / 9 + 273.15;
        }
      } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
          return temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
          return (temperature - 273.15) * 9 / 5 + 32;
        }
      }

      return null;
    }

    // Event listener for the convert button
    convertBtn.addEventListener("click", function() {
      const temperature = parseFloat(temperatureInput.value);
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;

      if (!isNaN(temperature)) {
        const result = convertTemperature(temperature, fromUnit, toUnit);

        if (result !== null) {
          output.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
        } else {
          output.textContent = "Invalid conversion";
        }
      } else {
        output.textContent = "Invalid input";
      }
    });
  