const apiKey = "00dc77a3c3bd322392b3c8ac173fc155"; // Your API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        document.getElementById("weather-info").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}
