import { ApiDataObj } from "./ApiDataObj";

// ** Function returns weather object
export async function getRequestObj(apiMethod, location, days = 0) {

    let apiDataObj = new ApiDataObj(apiMethod, location, days);
    let requestText = "https://api.weatherapi.com/v1/"+apiDataObj.apiMethod+"?key="+apiDataObj.apiKey+"&q="+location+"&days="+apiDataObj.days+"&contentType=json";

    let requestObj = await sendApiRequest(requestText);    
    // console.log(requestObj);

    return requestObj;
}

// ** Send api request
async function sendApiRequest(requestText) {

    let response = await fetch(requestText);
    let responseObj = await response.json();

    // TODO: If location not found (Error)
    // console.log(responseObj);
    return responseObj

}