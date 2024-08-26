import { ApiDataObj } from "./ApiDataObj";

// ** Function returns weather object
export async function getRequestObj(apiMethod, location, days = 0) {
    
    let apiDataObj = new ApiDataObj(apiMethod, location, days);
    let requestText = "https://api.weatherapi.com/v1/"+apiDataObj.apiMethod+"?key="+apiDataObj.apiKey+"&q="+location+"&days="+apiDataObj.days+"&contentType=json";

    let response = await fetch(requestText);

    if (response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }

    let responseObj = await response.json();

    return responseObj;
}