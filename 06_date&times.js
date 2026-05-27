let date = new Date() 
console.log(date); 

console.log(date.getFullYear()); 
console.log(date.getMonth()); //0-based index for months (0 = January, 1 = February, ..., 5 = June)
console.log(date.getDate());
console.log(date.getDay()); //0-based index for days of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

console.log(date.toDateString()); 
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


console.log(Date.now()); //returns the number of milliseconds since January 1, 1970, 00:00:00 UTC


console.log(typeof date); 

console.log(date instanceof Date); //true, checks if date is an instance of the Date class

console.log(Date())

console.log(Date().toString()); //returns the current date and time as a string
