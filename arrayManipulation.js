function processArray(numbers){
    return numbers.map(number => {if (number % 2 === 0){
       return number * number
    } else {
        return number * 3
    }
})
}

let age = [3,2,4,1]
console.log(processArray(age))