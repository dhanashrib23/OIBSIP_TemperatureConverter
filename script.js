
const degree = document.querySelector("#fromValue");
const convertBtn = document.querySelector("#convertBtn");
const fromUnit = document.querySelector("#fromUnit");
const resultValue = document.querySelector("#resultValue");
const currentTimeElement = document.getElementById('current-time');


function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    return `${hours}:${minutes}`;
}


function updateTime() {
    currentTimeElement.textContent = getCurrentTime(); 
}


updateTime();

setInterval(updateTime, 60000);


window.addEventListener("load", () => {
    degree.value = "0";
    resultValue.innerHTML = "---";
});


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTemperature();
});


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
