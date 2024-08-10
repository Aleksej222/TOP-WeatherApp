export async function sendApiRequest(requestText) {

    let response = await fetch(requestText);
    let responseObj = await response.json();

    console.log(responseObj);
    return responseObj

}