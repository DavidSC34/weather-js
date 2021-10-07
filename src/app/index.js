const { Weather } = require('./Weather');
const { UI } = require('./UI');

const ui = new UI();
const weather = new Weather('London', 'uk');

require('./index.css');

async function fetchweather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchweather);