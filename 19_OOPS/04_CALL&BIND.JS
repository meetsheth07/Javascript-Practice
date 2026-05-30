function setUserName(name){
    // let name = prompt("Enter your name")
    // console.log(this)
    this.name = name
}

function SetAccount(name,age,balance) {
    // this.name = name;
    setUserName.call(this, name);
    this.age = age;
    this.balance = balance;
}

const user1 = new SetAccount("Meet", 25, 5000);
console.log(user1);