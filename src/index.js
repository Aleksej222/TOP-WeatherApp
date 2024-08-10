import { getRequestObj } from "./getRequestObj";

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-search');

if (btnSendRequest) {

    btnSendRequest.addEventListener('click', () => {

        if (locationInput.value) {

            // TODO: Only send 1 request (forecast) has location, current, forecast
            // let response = getRequestObj('current.json', locationInput.value);
            // Only return 3 days
            let response = getRequestObj('forecast.json', locationInput.value, 5);

            // console.log(response);

        }
    })
}


// TODO: Set location details (Oslo): Oslo, Norway, 21:30
// TODO: Validate input field
// TODO: Write error handling (for api calls)

 
