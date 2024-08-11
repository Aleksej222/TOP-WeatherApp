export async function sendApiRequest(requestText) {

    let response = await fetch(requestText);
    let responseObj = await response.json();

    // TODO: If location not found (Error)
    // console.log(responseObj);
    return responseObj

}