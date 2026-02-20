async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "088c394e4e78a2a6ee805a8135b5ddfc";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>🌤 Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("result").innerHTML = "City not found ❌";
        }
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data ⚠️";
    }
}
