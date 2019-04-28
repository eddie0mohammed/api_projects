class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        // this.details = document.getElementById('w-details');
        // this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        // this.feelslike = document.getElementById('w-feels-like');
        // this.dewpoint = document.getElementById('w-dewpoint');
        this.winddeg = document.getElementById('w-wind-deg');
        this.windspeed = document.getElementById('w-wind-speed');
    }
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${Math.floor(weather.main.temp - 273.15)}° C`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.winddeg.textContent = `Wind Direction: ${weather.wind.deg}`;
        this.windspeed.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}