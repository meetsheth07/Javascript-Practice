let flag = true //boolean data type can only have two values: true or false
let age = 30 //number data type can represent both integers and floating-point numbers
let name = "Alice" //string data type is used to represent text
let score = null //null represents the intentional absence of any object value
let undefinedVariable //undefined represents a variable that has been declared but not assigned a value
let object = { //object data type is used to store collections of data and more complex entities
    name: "Bob",
    age: 25,
    isStudent: true
};
console.table({
    flag,
    age,
    name,
    score,
    undefinedVariable,
    object
});

console.log(typeof flag); //boolean
console.log(typeof age);    //number
console.log(typeof name);   //string