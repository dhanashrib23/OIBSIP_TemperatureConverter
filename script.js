// Get references to the necessary elements
const degree = document.querySelector("#fromValue");
const convertBtn = document.querySelector("#convertBtn");
const fromUnit = document.querySelector("#fromUnit");
const resultValue = document.querySelector("#resultValue");
const currentTimeElement = document.getElementById('current-time');

// Function to get the current time in HH:MM format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Format hours to have leading zero
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes to have leading zero
    return `${hours}:${minutes}`;
}

// Function to update the time element
function updateTime() {
    currentTimeElement.textContent = getCurrentTime(); // Update the content of the time element with the current time
}

// Update time initially
updateTime();

// Set an interval to update the time every minute (60000 milliseconds)
setInterval(updateTime, 60000);

// Event listener for when the page loads
window.addEventListener("load", () => {
    degree.value = "0";
    resultValue.innerHTML = "---";
});

// Event listener for the convert button
convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTemperature();
});

// Function to convert temperature
function convertTemperature() {
    let inputValue = parseFloat(degree.value);

    if (fromUnit.value === "fahrenheit") {
        const celsiusToFahrenheit = (inputValue * 9 / 5) + 32;

        resultValue.innerHTML = `${celsiusToFahrenheit.toFixed(2)} °F`;
    } else {
        const celsiusToKelvin = inputValue + 273.15;
        resultValue.innerHTML = `${celsiusToKelvin.toFixed(2)} K`;
    }
}
