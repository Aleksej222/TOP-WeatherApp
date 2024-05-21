let apiKey = 'ba2ccfa3d69b4712b5e74013241405';

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-send-request');

btnSendRequest.addEventListener('click', () => {
    // console.log(locationInput.value);

    // ** Send api request

    

    sendRequest();

    //console.log(weatherData);  // promise pending
        

});

async function sendRequest() {

    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=ba2ccfa3d69b4712b5e74013241405&q=london&contentType=json');
    let data = await response.json();

    let weatherData = data.current;
  
    // console.log(weatherData);

    setWeather(weatherData);

    // return weatherData;

}

function setWeather(weatherData) {

    console.log(weatherData);

}

/*
    TODO: Validate input field
    TODO: Split into several scripts
    TODO: Write proper html and css

*/