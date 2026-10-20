
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.querySelector(".weather-icon");
const details = document.querySelectorAll(".weather-details strong");

const weatherData = {
    pune: {
        temperature: "28°C",
        condition: "Sunny",
        icon: "☀️",
        humidity: "55%",
        wind: "12 km/h"
    },
    mumbai: {
        temperature: "30°C",
        condition: "Cloudy",
        icon: "☁️",
        humidity: "70%",
        wind: "15 km/h"
    },
    delhi: {
        temperature: "26°C",
        condition: "Clear",
        icon: "🌤️",
        humidity: "40%",
        wind: "10 km/h"
    },
    london: {
        temperature: "15°C",
        condition: "Rainy",
        icon: "🌧️",
        humidity: "80%",
        wind: "18 km/h"
    }
};

function searchWeather() {
    const city = cityInput.value.trim().toLowerCase();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    if (!weatherData[city]) {
        alert("Demo data is available for Pune, Mumbai, Delhi and London.");
        return;
    }

    const weather = weatherData[city];

    cityName.textContent =
        city.charAt(0).toUpperCase() + city.slice(1);

    temperature.textContent = weather.temperature;
    condition.textContent = weather.condition;
    weatherIcon.textContent = weather.icon;

    details[0].textContent = weather.humidity;
    details[1].textContent = weather.wind;

    cityInput.value = "";
}

searchButton.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});
