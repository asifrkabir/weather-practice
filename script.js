getWeatherInfo('Dhaka');

document.getElementById('search-btn').addEventListener('click', function() {

    const cityName = document.getElementById('city-name-input').value;
    console.log(cityName);
    getWeatherInfo(cityName);

})

function getWeatherInfo(cityName) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=20fba328e58a93c6001f6d46264a5954`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherInfo(data))
}

function displayWeatherInfo(weatherData){
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('temperature').innerText = weatherData.main.temp;
    document.getElementById('weather').innerText = weatherData.weather[0].description;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
}