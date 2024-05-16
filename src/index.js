let apiKey = 'ba2ccfa3d69b4712b5e74013241405';

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-send-request');

btnSendRequest.addEventListener('click', () => {
    // console.log(locationInput.value);

    // ** Send api request

    fetch('https://api.weatherapi.com/v1/current.json?key=ba2ccfa3d69b4712b5e74013241405&q=london')
    .then(function(response) {

        let data = response.json();
        //data = data.current;
        
        console.log(data);

    })

});


/*

    const fetchWeather = async () => {
    const data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Islamabad&units=metric&appid=" +
        APIKey
    );
    const weather = await data.json();
    setWeather(weather);
};

*/


/*
    TODO: Validate input field
    TODO: Split into several scripts
    TODO: Write proper html and css

*/