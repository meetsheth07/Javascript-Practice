class user {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name.toUpperCase();
    }
    set name(value) {
        this.#name = value+" "+"gupta";
    }
    // if we want to set the name then we can use the setter method and if we want to get the name then we can use the getter method
    // we have to use setter if we use getter because if we use getter then we can get the name but if we want to set the name then we have to use setter method
}

const user1 = new user("Meet", 25);
console.log(user1.name);
user1.name = "Hitesh";
console.log(user1.name);

const user2 = new user("Hitesh", 30);
console.log(user2.name);

const user3 = {
    name: "Alice",
    age: 28,
    get displayName() {
        return this.name.toUpperCase();
    },
    set displayName(value) {
        this.name = value + " " + "gupta";
    }
};

console.log(user3.displayName);
user3.displayName = "Priya";
console.log(user3.displayName);