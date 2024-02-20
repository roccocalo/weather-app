const form = document.querySelector('[data-form]');
const inputBar = document.getElementById('search-bar');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const currentWeather = document.getElementById('current-weather');
const celsius = document.getElementById('celsius');
const feelsCelsius = document.getElementById('feels-celsisus');
const wind = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const rainPrecipitation = document.getElementById('rain');
const searchIcon = document.getElementById('search-icon')
const errorText = document.getElementById('error-text');

form.addEventListener('submit', e => {
    e.preventDefault()
    getData(inputBar.value)
});

searchIcon.addEventListener('click', e => {
    getData(inputBar.value)
});

async function getData(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=346247b6e0b84dd3b4d223551241902&q=${city}`, { mode: 'cors' })
        const weatherData = await response.json()
        errorText.textContent = ''
        cityName.textContent = weatherData.location.name
        weatherIcon.src = weatherData.current.condition.icon
        currentWeather.textContent = weatherData.current.condition.text
        celsius.textContent = 'celsius: ' + weatherData.current.temp_c + '°'
        feelsCelsius.textContent = 'feels like: ' + weatherData.current.feelslike_c + '°'
        wind.textContent = 'wind speed: ' + weatherData.current.wind_kph + ' km/h'
        humidity.textContent = 'humidity: ' + weatherData.current.humidity + '%'
        rainPrecipitation.textContent = 'precipitation: ' + weatherData.current.precip_mm + ' mm'
    } catch (error) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=346247b6e0b84dd3b4d223551241902&q=${city}`, { mode: 'cors' })
        const weatherData = await response.json()
        errorText.textContent = weatherData.error.message
    }
}

getData('rome') 