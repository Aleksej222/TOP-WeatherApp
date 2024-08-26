// ** Validate location input string
export function validateLocationInput(locationInput) {
    let locationInputValid = false;

    locationInputValid = (locationInput.length >= 2);
    locationInputValid = locationInputValid && (locationInput.length <= 20);
    
    let onlyLetters = stringIsValid(locationInput);
    locationInputValid = locationInputValid && (onlyLetters == true);

    return locationInputValid;
}

function stringIsValid(str) {
    
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
    
}