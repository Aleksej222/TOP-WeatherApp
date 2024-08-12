import { getRequestObj } from "./getRequestObj";
import { changeDom } from "./changeDom";

let locationInput = document.querySelector('.input-location');
let btnSendRequest = document.querySelector('.btn-search');

if (btnSendRequest) {

    btnSendRequest.addEventListener('click', async () => {

        if (locationInput.value) {
            
            // Only returns 3 days
            let responseObj = await getRequestObj('forecast.json', locationInput.value, 5)

            // console.log(responseObj);

            changeDom(responseObj);
            
        }
    })
}

// TODO: Validate input field
// TODO: Write error handling (for api calls)

 
// let responseObj = await getRequestObj('forecast.json', locationInput.value, 5).then(responseObj => {
//     console.log(responseObj);
// }
// );