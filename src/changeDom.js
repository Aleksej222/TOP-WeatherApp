// ** Function that manipulates DOM
export function changeDom(responseObj) {

    console.log(responseObj);

    changeLocationDetails(responseObj.location);

    changeCurrentConditions(responseObj.current);

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
    console.log(current);

    // ?? Kako postaviti ikonice
    
}