const apiKey = "5a92764b0d773276747a0050d248fb61"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found or API error.");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        alert("Error fetching weather data. Please try again.");
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    alert(`Weather in ${name}:
    Temperature: ${temperature}°C
    Description: ${description}`);
}

// Example usage
const city = prompt("Enter a city name:");
if (city) {
    fetchWeather(city);
}