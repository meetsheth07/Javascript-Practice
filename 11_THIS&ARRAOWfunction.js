const user = {
    name:"Dave",
    age: 28,
    email: "dave@example.com",
    welcomeMessage: function() {
        console.log(`Welcome, ${this.name}!`);
        console.log(this); 
    }   
}
console.log(user);
user.welcomeMessage(); 

// user.name = "David";
// user.welcomeMessage();
console.log(this);

const chai = function() {
    let username = "Charlie";
    console.log(`Hello, ${this.username}!`);
    console.log(this); 
}

chai();


//arrow  function
const arrowFunc = (username) => {
    console.log(`Hello, ${username}!`);
    console.log(this); 
}
arrowFunc("Charlie");

const addtwo = (a, b) => a + b;
console.log(addtwo(5, 3));

const returnObject = () => ({ name: "Alice", age: 25 });
console.log(returnObject());