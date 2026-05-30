const user = {
    name: "John",
    age: 30,
    LoggedIn: true,
    LoggedTimes:20,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }       
}

console.log(user.name); 
console.log(user.age); 
console.log(user.LoggedIn); 
console.log(user.LoggedTimes); 
user.email = "john@example.com";
console.log(user.email); 

function CreateUser(name, age, LoggedIn, LoggedTimes) {
    this.name = name;
    this.age = age;
    this.LoggedIn = LoggedIn;
    this.LoggedTimes = LoggedTimes;
    return this;
}

const user1 = new CreateUser("Meet", 25, true, 10);
const user2 = new CreateUser("Alice", 28, false, 5);

console.log(user1);
console.log(user2);

