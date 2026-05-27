let myarr = [0,1,2,3,4,5,6,7,8,9]

console.log(myarr[0]); 
console.log(myarr[5]);
console.log(myarr.length);

myarr.push(10) 
console.log(myarr); 

myarr.pop() 
console.log(myarr);

myarr.unshift(-1) 
console.log(myarr);
myarr.shift() 
console.log(myarr);

myarr.splice(2, 0, 2.5) //
console.log(myarr);

myarr.splice(2, 1)
console.log(myarr);



const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"]

console.log(marvelHeroes.indexOf("Thor"));
const DCheroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]

// marvelHeroes.push(DCheroes)
// console.log(marvelHeroes); // the entire DCheroes array is added as a single element to the end of marvelHeroes

marvelHeroes.push(...DCheroes) 
console.log(marvelHeroes); //the elements of DCheroes are added individually to the end of marvelHeroes using the spread operator (...)

let anotherArr = [1,2,3,4,[5,6,7,8],9,10,[11,12,[13,14]]]
let flatArr = anotherArr.flat(Infinity)
console.log(flatArr); //flattens the nested arrays into a single-level array using the flat() method with Infinity as the depth parameter 


console.log(Array.isArray("meetsheth"));
 //true, checks if myarr is an array

 let awray = Array.from("Hello")
 console.log(awray); //creates an array from the string "Hello", resulting in ['H', 'e', 'l', 'l', 'o']

 let score1 = 85
    let score2 = 90
    let scores = Array.of(score1, score2)
    console.log(scores); //creates an array containing the specified scores, resulting in [85, 90]