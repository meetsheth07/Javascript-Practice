let a = 300
let b = 400
if(true) {
    let a = 100
    console.log(a);
    // var b = 200//var is function-scoped, so it is accessible outside the block and will overwrite the previous value of b
    console.log(b);
}

console.log(a);
console.log(b);


function testScope() {
    let x = 10;
    if (true) {
        let x = 20; 
        console.log(x); // Output: 20, this x is different from the outer x due to block scope
    }
    console.log(x); // Output: 10, this x refers to the outer x defined in the function scope
}
testScope();

function testVarScope() {
    var y = 10;
    if (true) {
        var y = 20; 
        console.log(y); // Output: 20, this y is the same as the outer y due to function scope of var
    }
    console.log(y); // Output: 20, this y refers to the same y defined in the function scope, which was overwritten by the inner var declaration
}   