// ** Function that manipulates DOM
export function changeDom(responseObj) {

    // console.log(responseObj);

    changeLocationDetails(responseObj.location);
    changeCurrentConditions(responseObj.current);
    changePrecipitationTable(responseObj.forecast);

}

// TODO: Split into minor scripts

// ** Set location details (Oslo): Oslo, Norway, 21:30
function changeLocationDetails(location) {
    // console.log(location);

    let locationName = document.querySelector('.location-name');
    let locationDetails = document.querySelector('.location-details');

    let locationTimeArr = location.localtime.split(' ');
    let locationTime = locationTimeArr[1];
    let locationDetailsStr = location.region + ', ' + location.country + ', ' + locationTime;
    
    locationName.innerHTML = location.name;
    locationDetails.innerHTML = locationDetailsStr;

}

// ** Set current condition table details
function changeCurrentConditions(current) {
    // console.log(current);
    // ?? Kako postaviti ikonice
    
    // TODO: Use span for celsius sign
    // let celsiusSign = document.querySelectorAll('.celsius-sign');
    let currentTemp = document.querySelector('.current-temperature-deg');
    let feelsLikeTemp = document.querySelector('.feels-like-temperature-deg');
    let currentPrecipitation = document.querySelector('.current-precipitation-mm');
    let windKpH = document.querySelector('.current-wind-kph');

    // celsiusSign.innerHTML = '&deg';
    currentTemp.innerHTML = current.temp_c + '&deg';
    feelsLikeTemp.innerHTML = current.feelslike_c + '&deg';
    currentPrecipitation.innerHTML = current.precip_mm;
    windKpH.innerHTML = current.wind_kph;
    
}


function changePrecipitationTable(forecast) {
    console.log(forecast);

}