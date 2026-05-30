let myname = "MEET      "
String.prototype.truelength = function() {
    return this.trim().length;
}

console.log(myname.truelength());

let myHeros = ["Superman", "Batman", "Flash"];

let HeroPower = {
    "Superman": "Strength",
    "Batman": "Money",
    "Flash": "Speed"
}

HeroPower.getPower = function(hero) {
    return this[hero];
}

Array.prototype.LUND = function() {
    console.log("LUND");
}
console.log(myHeros.LUND());

console.log(HeroPower.getPower("Flash"));

const Teacher1 = {
    isTeaching: true,
    nooflectures: 50
}   

const Teacher2 = {
    isTeaching: false,
    nooflectures: 59
}

const TeachingSupport = {
    isTeaching: false,
    nooflectures: 0
}

const tutor = Object.create(Teacher1);

const helper = {
    __proto__: TeachingSupport,
    helpingHours: 5
}

const principle = {
    __proto__: Teacher2,    
    Experience: 10
}

Object.setPrototypeOf(helper, Teacher1);
Object.setPrototypeOf(principle, Teacher2);

console.log(helper);
console.log(principle);