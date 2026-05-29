const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise One Resolved");
    }, 2000);
});

const PromiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two Resolved");
    }, 1000);
});

const PromiseThree = new Promise((resolve, reject) => {
    let error = false; 
    setTimeout(() => {
        if (!error) {
            resolve("Promise Three Resolved");
        } else {
            reject("Promise Three Rejected");
        }
    }, 1500);
});

const promisFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({name:"Meet", age: 30, city: "Ahmedabad"});
        } else {
            reject("Promise Four Rejected");
        }
    }, 1000);
});
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
promiseOne.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});



promiseTwo.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
promiseThree.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
} );



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({name: "John", age: 25, city: "New York"});
        } else {
            reject("Promise Five Rejected");
        }
    }, 2000);
});

async function fetchData() {
    try {
        const data = await promiseFive;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();