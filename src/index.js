import { getRequestObj } from "./apiRequest";
import { changeDom } from "./changeDom";
import { validateLocationInput } from "./validateLocationInput";

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-search');

if (btnSendRequest) {

    btnSendRequest.addEventListener('click', async () => {

        let locationInputValid = false;
        locationInputValid = validateLocationInput(locationInput.value);

        if (locationInputValid) {
            
            // Only returns 3 days
            getRequestObj('forecast.json', locationInput.value, 5)
            .then(data => {
                // ** Location found
                changeDom(data);
            })
            .catch(err => {
                // ** Error, display error page
                console.log(err);

                // showErrorPage()
            })

            locationInput.value = '';  // ** Set input field to blank 
            // console.log(responseObj);

            
            
        }
    })
}

// ** Send api request when it loads
function sendRequestOnLoad() {

    locationInput.value = 'Elverum';
    btnSendRequest.click();
    
}

sendRequestOnLoad();

// TODO: Write error handling (for api calls)

 
// let responseObj = await getRequestObj('forecast.json', locationInput.value, 5).then(responseObj => {
//     console.log(responseObj);
// }
// );