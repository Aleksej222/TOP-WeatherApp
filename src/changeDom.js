// ** Function that manipulates DOM
export function changeDom(responseObj) {

    // console.log(responseObj);

    changeLocationDetails(responseObj.location);
    changeCurrentConditions(responseObj.current);
    changePrecipitationTable(responseObj.forecast.forecastday[0]);
    changeForecastTable(responseObj.forecast.forecastday);

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

function changePrecipitationTable(forecastToday) {
    // console.log(forecastToday);

    let totalPrecipMM = document.querySelector('.total-precip-mm');

    let precipitationState = forecastToday.day.totalprecip_mm;
    totalPrecipMM.innerHTML = precipitationState;
    
}

function changeForecastTable(forecast) {
    // console.log(forecast);
    let forecastList = document.querySelector('.weather-list-content');
    // console.log(forecastList);

    forecast.forEach(day => {
        // console.log(day);
        
        let forecastItem = createWeatherListItem(day);
        // console.log(forecastItem);

        forecastList.appendChild(forecastItem);

        // ** Everything goes to '.weather-list-item'
        
        
    });
    
    // TODO: Create span element, set date
    // TODO: Get day of the week (Sunday = 0)
    // const d = new Date();
    // let day1 = d.getDay();

    
}

function createWeatherListItem(day) {
    console.log(day);

    let listItem = document.createElement('li');
    listItem.classList.add('weather-list-item');

    let listItemDateDiv = document.createElement('div');
    listItemDateDiv.classList.add('list-item-date')
    
    let listItemDateSpan = document.createElement('span');
    listItemDateSpan.innerHTML = day.date;

    listItemDateDiv.appendChild(listItemDateSpan);

    /*
         <ol class="list-forecast-symbols d-flex">
                            <li class="list-forecast-symbol-morning"><span>test</span></li>
                            <li class="list-forecast-symbol-afternoon"><span>test</span></li>
                            <li class="list-forecast-symbol-evening"><span>test</span></li>
                            <li class="list-forecast-symbol-night"><span>test</span></li>
        </ol>
    */

    listItem.appendChild(listItemDateDiv);

    return listItem;

}


    // TODO: Create function for icon change
    // TODO: Create function for dates
    // TODO: Change month number to month text