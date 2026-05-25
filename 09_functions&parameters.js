function add (a, b) {
    return a + b;
}

console.log(add(5, 3)); 

function greet(name) {
    if(!name) {
        return "Hello, Guest!,please provide your name.";
    }
    return `Hello, ${name}!`;
}


function calculateP(...numbers) {
    return numbers;
}

console.log(calculateP(2, 3, 4));

function getsecondelement(arr) {
    if(arr.length < 2) {
        return "Array does not have a second element.";
    }
    return arr[1];
}

console.log(getsecondelement([10, 20, 30]));

function greetUser(user) {
    if(!user || !user.name) {
        return "Hello, Guest!,please provide your name.";
    }   
    return `Hello, ${user.name}! just logged in.`;
} ;