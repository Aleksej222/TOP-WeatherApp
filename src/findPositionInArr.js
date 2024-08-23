// ** Find position of first array in which the element appears
export function findPositionInArr(arr1, arr2) {
    // Iterate through each element of the 1D array
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        
        // Iterate through each sub-array in the 2D array
        for (let j = 0; j < arr2.length; j++) {
            const subArray = arr2[j];
            
            // Check if the element exists in the current sub-array
            const colIndex = subArray.indexOf(element);
            if (colIndex !== -1) {
                // Return the position [row, column] if found
                // return [j, colIndex];

                return j;
            }
        }
    }
    
    // Return -1 if no element from arr1 is found in arr2
    return -1;
}




