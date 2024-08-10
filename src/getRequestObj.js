import { ApiDataObj } from "./ApiDataObj";
import { sendApiRequest } from "./sendApiRequest";

export function getRequestObj(apiMethod, location, days = 0) {

    let apiDataObj = new ApiDataObj(apiMethod, location, days);

    console.log(apiDataObj);
    let requestText = "https://api.weatherapi.com/v1/"+apiDataObj.apiMethod+"?key="+apiDataObj.apiKey+"&q="+location+"&days="+apiDataObj.days+"&contentType=json";

    // console.log(location);
    // console.log(apiMethod);
    // console.log(days);
    // (requestText);

    // let requestObj = {};
    let requestObj = sendApiRequest(requestText);
    return requestObj;
}