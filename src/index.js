let apiKey = 'ba2ccfa3d69b4712b5e74013241405';

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-send-request');

btnSendRequest.addEventListener('click', () => {
    // console.log(locationInput.value);

    // ** Send api request
    if (locationInput.value) {
        sendRequest(locationInput.value);
    }
        
});

async function sendRequest(location) {

    let requestText = "https://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+location+"&contentType=json";
    let response = await fetch(requestText);
    let data = await response.json();

    let weatherData = data.current;
  
    // console.log(data);
    // console.log(weatherData);

    setWeather(weatherData);

}

function setWeather(weatherData) {

    console.log(weatherData);

}

/*
    TODO: Validate input field
    TODO: Write error handling (for api calls)
    TODO: Split into several scripts
    TODO: Write proper html and css

*/