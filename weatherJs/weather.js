class Weather{
    constructor(city){
        this.apikey = 'cde81f9ec99ef0412079fa028a5abf6f';
        this.city = city;
        // this.countryCode = countryCode;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`);
        
        const responseData = await response.json();

        return responseData;
    }

    //change weather location
    changeLocation(city){
        this.city = city;
        // this.state = state;
    }
}
