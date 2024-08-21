import { getRequestObj } from "./getRequestObj";
import { changeDom } from "./changeDom";

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-search');

if (btnSendRequest) {

    btnSendRequest.addEventListener('click', async () => {

        if (locationInput.value) {
            
            // Only returns 3 days
            let responseObj = await getRequestObj('forecast.json', locationInput.value, 5)

            locationInput.value = '';  // ** Set input field to blank 
            // console.log(responseObj);

            changeDom(responseObj);
            
        }
    })
}

// ** Send api request when it loads
function sendRequestOnLoad() {

    locationInput.value = 'Elverum';
    btnSendRequest.click();
    
}

sendRequestOnLoad();

// TODO: Fix HTML (delete unneccesary code)
// TODO: Comment every function
// TODO: Validate input field (no numbers, char limit...)
// TODO: Write error handling (for api calls)

 
// let responseObj = await getRequestObj('forecast.json', locationInput.value, 5).then(responseObj => {
//     console.log(responseObj);
// }
// );