import { ApiDataObj } from "./ApiDataObj";
import { sendApiRequest } from "./sendApiRequest";

export async function getRequestObj(apiMethod, location, days = 0) {

    let apiDataObj = new ApiDataObj(apiMethod, location, days);
    let requestText = "https://api.weatherapi.com/v1/"+apiDataObj.apiMethod+"?key="+apiDataObj.apiKey+"&q="+location+"&days="+apiDataObj.days+"&contentType=json";

    let requestObj = await sendApiRequest(requestText);    
    // console.log(requestObj);

    return requestObj;
}