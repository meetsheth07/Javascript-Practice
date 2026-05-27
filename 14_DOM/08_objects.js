//singleton
//object literals
const mySymbol = Symbol('mySymbol');
const JsUser = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    isAdmin: false,
    [mySymbol]: "secret",
    loggedinDays: ['Monday', 'Tuesday', 'Wednesday'],
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};


//ways of accessing object properties
console.log(JsUser.name);
console.log(JsUser['email']);

//modifying object properties
JsUser.age = 31;
console.log(JsUser.age);

console.log(JsUser.greet());

console.log(JsUser[mySymbol]); //accessing the symbol property using the symbol key

//adding new properties
// Object.freeze(JsUser); //freezes the object to prevent further modifications
JsUser.country = 'USA';
console.table(JsUser);    

JsUser.running = function() {
    console.log(`${this.name} is running.`);
}   

console.log(JsUser.running());  

let fbuser = {
    user_name: 'Alice',
    age: 25,
    email: 'alice@example.com',
    properties: {
        isAdmin: false,
        loggedinDays: ['Monday', 'Tuesday', 'Wednesday']
    },
    fullusername:{
        firstName: 'Alice',
        lastName: 'Smith',
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }       
    }
}

// object part-2

const newuser = new Object(); //singleton object created using the Object constructor
newuser.name = 'Alice';
newuser.age = 25;
newuser.email = 'alice@example.com';

const tinderuser = {
    name: 'Bob',
    age: 28,
    email: 'bob@example.com'
};//object literal syntax


const targetUser = { a:1, b:2, c:3 };
const sourceUser = { b:4, d:5 };

let newuser1 = Object.assign({}, targetUser, sourceUser); //merges
console.log(newuser1); 
console.log(targetUser===newuser1); //false, targetUser remains unchanged and newuser1 is a new object with merged properties
let ntuser={...targetUser,...sourceUser} //using spread operator to merge objects
console.log(ntuser); //{ a: 1, b: 4, c: 3, d: 5 }, the properties of sourceUser overwrite those of targetUser where there are conflicts (like property 'b') and the rest are combined into a new object ntuser


const userslist = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 28, email: 'bob@example.com' },
    { name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { name: 'David', age: 30, email: 'david@example.com' }
]


for (let index = 0; index < userslist.length; index++) {
    const element = userslist[index];
    console.log(element.name);
}



//------------------------part-3-----------------------------
const course = {
    title: 'JavaScript Basics',
    instructor: 'John Doe',
    duration: '4 weeks',
    price: 199,
    studentsEnrolled: 150,
    isActive: true
};

// Destructuring the course object
const { title, instructor:teacher, duration, price, studentsEnrolled, isActive } = course;
console.log(title); 
console.log(teacher);
console.log(duration);
console.log(price);
console.log(studentsEnrolled);
console.log(isActive);

const navbar = ({ title, links }) => {
};//function that takes an object as an argument and uses destructuring to extract the title and links properties from the object. The function can then use these properties to create a navigation bar for a website.

navbar({title: 'My Website', links: ['Home', 'About', 'Contact']});
console.log(navbar);

//json examples

// {
//   "login": "meetsheth07",
//   "id": 177380047,
//   "node_id": "U_kgDOCpKazw",
//   "avatar_url": "https://avatars.githubusercontent.com/u/177380047?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/meetsheth07",
//   "html_url": "https://github.com/meetsheth07",
//   "followers_url": "https://api.github.com/users/meetsheth07/followers",
//   "following_url": "https://api.github.com/users/meetsheth07/following{/other_user}",
//   "gists_url": "https://api.github.com/users/meetsheth07/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/meetsheth07/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/meetsheth07/subscriptions",
//   "organizations_url": "https://api.github.com/users/meetsheth07/orgs",
//   "repos_url": "https://api.github.com/users/meetsheth07/repos",
//   "events_url": "https://api.github.com/users/meetsheth07/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/meetsheth07/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Meet Sheth",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 8,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2024-08-03T04:36:58Z",
//   "updated_at": "2026-05-15T07:39:08Z"
// }


