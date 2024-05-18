const {createUserProfiles} = require("./userInfo")
//Task 1
// Function to process the array of numbers
function processArray(numbers){
    return numbers.map(number => {if (number % 2 === 0){
       return number * number
    } else {
        return number * 3
    }
})
}


// Task 2
function formatArrayStrings(strings, processedNumbers){
    if (strings.length !== processedNumbers.length) {
        throw new Error("Both arrays must have the same length.");
    }
    
    return strings.map((string, index) => {
        if (processedNumbers[index] % 2 === 0) {
            // Capitalize the entire string if the number is even
            return string.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return string.toLowerCase();
        }
    });
}



module.exports = {
    processArray,
    formatArrayStrings
};