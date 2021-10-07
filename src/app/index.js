const { Weather } = require('./Weather');
const weather = new Weather('London', 'uk');

require('./index.css');

async function fetchweather() {
    const data = await weather.getWeather();
    console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchweather);