//init weather object
const weather = new Weather('San Francisco');

//init ui object
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});

// weather.changeLocation('Miami');
function getWeather(){

weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results);
    })
    .catch(err => console.log(err));

}