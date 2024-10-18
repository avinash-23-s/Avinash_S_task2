document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const cityName = document.getElementById('cityInput').value;
    getWeather(cityName);
});

function getWeather(city) {
    const apiKey = '7f91cc0d6ad9fdd13eef110b11349c24'; // Replace with your API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('weatherInfo').innerHTML = `
                <h2>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}:</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
        });
}
