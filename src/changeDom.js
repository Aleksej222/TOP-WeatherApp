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
    
    // TODO: Change month number to month text
    let listItemDateSpan = document.createElement('span');
    listItemDateSpan.innerHTML = day.date;

    listItemDateDiv.appendChild(listItemDateSpan);

    let listSymbolsContainerOl = document.createElement('ol');
    listSymbolsContainerOl.classList.add('list-forecast-symbols');
    listSymbolsContainerOl.classList.add('d-flex');

    let symbolsArr = ['morning', 'afternoon', 'evening', 'night'];
    
    for (let i = 0; i < symbolsArr.length; i++) {

        let listSymbolLi = document.createElement('li');
        listSymbolLi.classList.add('list-forecast-symbol');
        listSymbolLi.classList.add('symbol-'+symbolsArr[i]);

        // TODO: Replace with icons later
        let listSymbolSpan = document.createElement('span');
        listSymbolSpan.innerHTML = symbolsArr[i];

        listSymbolLi.appendChild(listSymbolSpan);
        listSymbolsContainerOl.appendChild(listSymbolLi);
    }

    let forecastItemDiv = document.createElement('div');
    forecastItemDiv.classList.add('list-forecast-item');
    forecastItemDiv.classList.add('d-flex');

    let itemTempDiv = document.createElement('div');
    itemTempDiv.classList.add('list-item-temperature');

    // TODO: Fix formating later
    let itemTempSpan = document.createElement('span');
    itemTempSpan.innerHTML = day.day.maxtemp_c + '&deg / ' + day.day.mintemp_c + '&deg';

    itemTempDiv.appendChild(itemTempSpan);
    forecastItemDiv.appendChild(itemTempDiv);

    let itemPrecipDiv = document.createElement('div');
    itemPrecipDiv.classList.add('list-item-precip');

    let itemPrecipSpan = document.createElement('span');
    itemPrecipSpan.innerHTML = day.day.totalprecip_mm;

    itemPrecipDiv.appendChild(itemPrecipSpan);
    forecastItemDiv.appendChild(itemPrecipDiv);

    let itemWindDiv = document.createElement('div');
    itemWindDiv.classList.add('list-item-wind');

    let itemWindSpan = document.createElement('span');
    itemWindSpan.innerHTML = day.day.maxwind_kph;

    itemWindDiv.appendChild(itemWindSpan);
    forecastItemDiv.appendChild(itemWindDiv);

    listItem.appendChild(listItemDateDiv);
    listItem.appendChild(listSymbolsContainerOl);
    listItem.appendChild(forecastItemDiv);

    return listItem;

}


    // TODO: Create function for icon change
    // TODO: Create function for dates
