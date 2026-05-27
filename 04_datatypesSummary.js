//two tyoes of datatypes: primitive and non-primitive
//primitive data types: boolean, number, string, null, undefined, symbol
//non-primitive data types: object, array, function


let flag = true //boolean data type can only have two values: true or false
let age = 30
let score = 85.6 //number data type can represent both integers and floating-point numbers


const oust = null //null represents the intentional absence of any object value
let undefinedVariable //undefined represents a variable that has been declared but not assigned a value


const id = Symbol("id") //symbol is a unique and immutable primitive value that can be used as a key for object properties
console.log(typeof id); //symbol
console.log(id); //Symbol(id)

const accNo = 223437498370254452055033005500 //JavaScript can handle large integers using BigInt data type
const bigIntNum = BigInt("9007199254740991") //BigInt can represent integers larger than 2^53 - 1
console.log(typeof bigIntNum);


const heroes = ["Superman", "Batman", "Wonder", "Flash"] 
const obj = {
    name: "Alice",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"]
    
}


//declaring function using variable declaration
const date = function() {
    return new Date();
}

console.log(date()); //current date and time