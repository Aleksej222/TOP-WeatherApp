let apiKey = 'ba2ccfa3d69b4712b5e74013241405';

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-send-request');

btnSendRequest.addEventListener('click', () => {
    // console.log(locationInput.value);

    // ** Send api request

    

    sendRequest();
        

});

async function sendRequest() {

    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=ba2ccfa3d69b4712b5e74013241405&q=london&contentType=json');
    let data = response.json();

    console.log(data);
    return data;

}

function sendRequest2() {

    const apiRequest = async () => {

        const data = await fetch(
            'https://api.weatherapi.com/v1/current.json?key=ba2ccfa3d69b4712b5e74013241405&q=london&contentType=json'
        );

        const weather = await data.json();

        console.log(weather);
        console.log('1');
    }

    console.log(apiRequest);
    return apiRequest;

}

/* 


        const data = await fetch('https://api.weatherapi.com/v1/current.json?key=ba2ccfa3d69b4712b5e74013241405&q=london&contentType=json')
        .then(function(response) {
    
            //let data = response.json();
            //data = data.current;
            
            let data = JSON.stringify(response);
    
            console.log(data);
            // console.log(response);   
    
        })

    }

*/


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