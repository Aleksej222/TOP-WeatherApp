import { findPositionInArr } from "./findPositionInArr";

// ** Function that manipulates DOM
export function changeDom(responseObj) {

    // console.log(responseObj);

    changeLocationDetails(responseObj.location);
    changeCurrentConditions(responseObj.current);
    changePrecipitationTable(responseObj.forecast.forecastday[0]);
    changeForecastTable(responseObj.forecast.forecastday);

}

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
    
    let tempIcon = document.querySelector('.img-current-temp');

    let tempText = current.condition.text;
    let imgSrc = setWeatherIcon(tempText);
    tempIcon.src = imgSrc;
    
    let currentTemp = document.querySelector('.current-temperature-deg');
    let feelsLikeTemp = document.querySelector('.feels-like-temperature-deg');
    let currentPrecipitation = document.querySelector('.current-precipitation-mm');
    let windKpH = document.querySelector('.current-wind-kph');

    currentTemp.innerHTML = current.temp_c + '&deg';
    feelsLikeTemp.innerHTML = current.feelslike_c + '&deg';
    currentPrecipitation.innerHTML = current.precip_mm;
    windKpH.innerHTML = current.wind_kph;
    
}

// ** Set daily precipitation levels
function changePrecipitationTable(forecastToday) {
    // console.log(forecastToday);

    let totalPrecipMM = document.querySelector('.total-precip-mm');

    let precipitationState = forecastToday.day.totalprecip_mm;
    totalPrecipMM.innerHTML = precipitationState;
    
}

// ** Change forecast table details 
function changeForecastTable(forecast) {
    // console.log(forecast);

    let forecastTable = document.querySelector('.forecast-table');

    let forecastList = document.querySelector('.weather-list-content');
    if (forecastList) {
        forecastTable.removeChild(forecastList);
    }

    // ol is used on yr.no
    forecastList = document.createElement('ol');
    forecastList.classList.add('weather-list-content');

    forecast.forEach(day => {
        let forecastItem = createWeatherListItem(day);
        // console.log(forecastItem);

        forecastList.appendChild(forecastItem);
    });
    
    // TODO: Create span element, set date
    // TODO: Get day of the week (Sunday = 0)
    // const d = new Date();
    // let day1 = d.getDay();

    forecastTable.appendChild(forecastList);
}

// ** Creates html for an item in the forecast table
function createWeatherListItem(day) {
    // console.log(day);

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

        // let listSymbolImg = document.createElement('image');
        let listSymbolImg = new Image(40, 40);
        listSymbolImg.classList.add('img');
        listSymbolImg.classList.add('img-forecast');

        let conditionText = '';

        switch (symbolsArr[i]) {
            case 'morning':
                // morning (08:00)
                conditionText = day.hour[8].condition.text;
                break;
            
            case 'afternoon':
                // afternoon (12:00)
                conditionText = day.hour[12].condition.text;
                break;

            case 'evening':
                // evening (18:00)
                conditionText = day.hour[18].condition.text;
                break
        
            default:
                // night (22:00)
                conditionText = day.hour[22].condition.text;
                break;
        }

        let imgSrc = setWeatherIcon(conditionText);
        listSymbolImg.setAttribute('src', imgSrc);
        
        listSymbolLi.appendChild(listSymbolImg);
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

// ** Function that sends icon src depending on weather condition
function setWeatherIcon(tempText) {
    // console.log(tempText);

    // Array that contains weather conditions
    let conditionsArr = [['sun', 'sunny'], ['rain', 'rainy'], ['thunder', 'lightning'], ['snow', 'snowing']];

    let imgSrc = '';
    let conditionFoundAt = -1;

    let arrSent = tempText.toLowerCase().split(' ');

    conditionFoundAt = findPositionInArr(arrSent, conditionsArr);

    switch (conditionFoundAt) {

        case 0:  
            // sunny
            imgSrc = '/icons/weather-conditions/sunny.svg';
            break;

        case 1:
            // rain
            imgSrc = '/icons/weather-conditions/rain.svg';
            break;

        case 2:
            // thunder
            imgSrc = '/icons/weather-conditions/thunder.svg';
            break;

        case 3:
            // snow
            imgSrc = '/icons/weather-conditions/snow.svg';
            break;

        default:
            // cloudy
            imgSrc = '/icons/weather-conditions/cloudy.svg';
            break;
    }

    // ?? Return object with imgSrc and alt text
    return imgSrc;
    
}


// TODO: Set day/date for forecast list items (Friday 23. Aug.)
// TODO: Enable search on 'Enter' key press