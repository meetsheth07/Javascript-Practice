let str = "33"
let num = Number(str) //converts string to number
console.log(num);

let num2 = 42
let isflag = Boolean(num2) 
console.log(typeof isflag); //boolean
console.log(isflag); //true because any non-zero number is considered true in boolean context

let str2 = String(num2) //converts number to string
console.log(str2);

let qy = -1
let isTruthy = Boolean(qy)
console.log(isTruthy); //true 
