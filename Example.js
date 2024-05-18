const {processArray, formatArrayStrings} = require('./arrayManipulation')
const {createUserProfiles} = require("./userInfo")

let age = [3,2,4,1,78]
let processedAge = processArray(age)
console.log(processedAge)
// [ 9, 4, 16, 3, 6084 ]


let name = ["Carl", "Pheal", "Rema", "Mimi", "Dearie"]
let modifiedNames = formatArrayStrings(name, processedAge)
console.log(modifiedNames)
// [ 'carl', 'PHEAL', 'REMA', 'mimi', 'DEARIE' ]


console.log(createUserProfiles(name, modifiedNames))
