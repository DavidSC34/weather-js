export class Weather {

    constructor(city, contryCode) {
        this.apikey = '98fae05cf331ab2f89e2bf36c8fec731';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;

        const response = await fetch(URI);
        const data = await response.json();

        return data;

    }
    
    changeLocation(city, countryCode){

        this.city = city;
        this.countryCode = countryCode;

    }
}