const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Conversion rates
const rates = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.43
};

// Function to convert currency
function convertCurrency() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    output.textContent = "Invalid amount";
    return;
  }

  if (fromCurrency === toCurrency) {
    output.textContent = "Please select different currencies";
    return;
  }

  if (!rates.hasOwnProperty(fromCurrency) || !rates.hasOwnProperty(toCurrency)) {
    output.textContent = "Currency conversion not available";
    return;
  }

  const result = (amount / rates[fromCurrency]) * rates[toCurrency];
  output.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

// Event listener for the convert button
convertBtn.addEventListener("click", convertCurrency);