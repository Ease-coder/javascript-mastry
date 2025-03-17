{
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    console.log(c); // undefined

    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30

}
//let and const (TDZ applies): These variables exist in the block but cannot be accessed before their declaration. Trying to access them before initialization results in a ReferenceError.
// var (No TDZ): var is hoisted and initialized with undefined, so accessing c before assignment doesn't cause an error.


// Explain Variable and Function Hoisting with Example. Post the code as your answer.





// Variable Hoisting
console.log(a); // Output: undefined (var is hoisted but not initialized)
var a = 10;
console.log(a); // Output: 10

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // 'let' is hoisted but remains in the Temporal Dead Zone
console.log(b); // Output: 20

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30; // 'const' is also hoisted but remains in the Temporal Dead Zone
console.log(c); // Output: 30

// Function Hoisting
hoistedFunction(); // Output: "Hello from hoistedFunction"

function hoistedFunction() {
    console.log("Hello from hoistedFunction");
}

// Function Expression (Not Hoisted)
console.log(notHoistedFunction); // Output: undefined (var hoisting, but function remains uninitialized)
// notHoistedFunction(); // TypeError: notHoistedFunction is not a function

var notHoistedFunction = function() {
    console.log("Hello from notHoistedFunction");
};

notHoistedFunction(); // Output: "Hello from notHoistedFunction"
