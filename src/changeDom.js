import { findPositionInArr } from "./findPositionInArr";
import { setDateText } from "./setDateText";

// ** Function that manipulates DOM
export function changeDom(responseObj) {

    const contentHtml = document.querySelector('.content');
    const errorPage = document.querySelector('.not-found')

    if (contentHtml.style.display == 'none') {

        contentHtml.style.display = 'block';
        errorPage.style.display = 'none';
    }

    changeLocationDetails(responseObj.location);
    changeCurrentConditions(responseObj.current);
    changePrecipitationTable(responseObj.forecast.forecastday[0]);
    changeForecastTable(responseObj.forecast.forecastday);
}

// ** Set location details (Oslo): Oslo, Norway, 21:30
function changeLocationDetails(location) {
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
    let tempIcon = document.querySelector('.img-current-temp');

    let tempText = current.condition.text;
    let imgObj = setWeatherIcon(tempText);

    tempIcon.src = imgObj.src;
    tempIcon.alt = imgObj.alt;
    
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
    let totalPrecipMM = document.querySelector('.total-precip-mm');

    let precipitationState = forecastToday.day.totalprecip_mm;
    totalPrecipMM.innerHTML = precipitationState;
}

// ** Change forecast table details 
function changeForecastTable(forecast) {
    let listContainerDiv = document.querySelector('.list-container');

    let forecastList = document.querySelector('.weather-list-content');
    if (forecastList) {
        listContainerDiv.removeChild(forecastList);
    }

    // ol is used on yr.no
    forecastList = document.createElement('ol');
    forecastList.classList.add('weather-list-content');

    forecast.forEach(day => {
        let forecastItem = createWeatherListItem(day);
        forecastList.appendChild(forecastItem);

    });
    
    listContainerDiv.appendChild(forecastList);
}

// ** Creates html for an item in the forecast table
function createWeatherListItem(day) {
    let listItem = document.createElement('li');
    listItem.classList.add('weather-list-item');

    let listItemDateDiv = document.createElement('div');
    listItemDateDiv.classList.add('list-item-date')
    
    let listItemDateSpan = document.createElement('span');

    let dayDateText = setDateText(day.date);
    listItemDateSpan.innerHTML = dayDateText;

    listItemDateDiv.appendChild(listItemDateSpan);

    let listSymbolsContainerOl = document.createElement('ol');
    listSymbolsContainerOl.classList.add('list-forecast-symbols');
    listSymbolsContainerOl.classList.add('d-flex');

    const symbolsArr = ['morning', 'afternoon', 'evening', 'night'];
    
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

        let imgObj = setWeatherIcon(conditionText);

        listSymbolImg.setAttribute('src', imgObj.src);
        listSymbolImg.setAttribute('alt', imgObj.alt);
        
        listSymbolLi.appendChild(listSymbolImg);
        listSymbolsContainerOl.appendChild(listSymbolLi);
    }

    let forecastItemDiv = document.createElement('div');
    forecastItemDiv.classList.add('list-forecast-item');
    forecastItemDiv.classList.add('d-flex');

    let itemTempDiv = document.createElement('div');
    itemTempDiv.classList.add('list-item-temperature');
    itemTempDiv.classList.add('color-temperature');

    let itemTempSpan = document.createElement('span');
    itemTempSpan.innerHTML = day.day.maxtemp_c + '&deg / ' + day.day.mintemp_c + '&deg';

    itemTempDiv.appendChild(itemTempSpan);
    forecastItemDiv.appendChild(itemTempDiv);

    let itemPrecipDiv = document.createElement('div');
    itemPrecipDiv.classList.add('list-item-precip');
    itemPrecipDiv.classList.add('color-precipitation');

    let itemPrecipSpan = document.createElement('span');
    itemPrecipSpan.innerHTML = day.day.totalprecip_mm + ' mm';

    itemPrecipDiv.appendChild(itemPrecipSpan);
    forecastItemDiv.appendChild(itemPrecipDiv);

    let itemWindDiv = document.createElement('div');
    itemWindDiv.classList.add('list-item-wind');

    let itemWindSpan = document.createElement('span');
    itemWindSpan.innerHTML = day.day.maxwind_kph + ' kp/h';

    itemWindDiv.appendChild(itemWindSpan);
    forecastItemDiv.appendChild(itemWindDiv);

    listItem.appendChild(listItemDateDiv);
    listItem.appendChild(listSymbolsContainerOl);
    listItem.appendChild(forecastItemDiv);

    return listItem;
}

// ** Function that sends image object with src and alt depending on weather condition
function setWeatherIcon(tempText) {

    // Array that contains weather conditions
    const conditionsArr = [['sun', 'sunny'], ['rain', 'rainy'], ['thunder', 'lightning'], ['snow', 'snowing']];
    
    let imgObj = {src: '', alt:''};
    let imgSrc = '';
    let imgAlt = ''
    let conditionFoundAt = -1;

    let arrSent = tempText.toLowerCase().split(' ');

    conditionFoundAt = findPositionInArr(arrSent, conditionsArr);

    switch (conditionFoundAt) {

        case 0:  
            // sunny
            imgSrc = '/icons/weather-conditions/sunny.svg';
            imgAlt = 'Image of the sun';
            break;

        case 1:
            // rain
            imgSrc = '/icons/weather-conditions/rain.svg';
            imgAlt = 'Image of the rain';
            break;

        case 2:
            // thunder
            imgSrc = '/icons/weather-conditions/thunder.svg';
            imgAlt = 'Image of the thunder';
            break;

        case 3:
            // snow
            imgSrc = '/icons/weather-conditions/snow.svg';
            imgAlt = 'Image of the snow';
            break;

        default:
            // cloudy
            imgSrc = '/icons/weather-conditions/cloudy.svg';
            imgAlt = 'Image of the cloud';
            break;
    }

    imgObj.src = imgSrc;
    imgObj.alt = imgAlt;
    
    return imgObj;
    
}