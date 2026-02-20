function getWeather() {
    const city = document.getElementById("cityInput").value;
    document.getElementById("result").innerHTML =
        "Weather data for " + city + " will appear here.";
}
