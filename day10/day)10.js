// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user); 
    }
    let user = "Bob";

    user === user
    inner();
}

 outer(); //output will be Bob why?:
                // in outside the user assingned to Alice 
                // but in outer function have inner function and here is declaring user = "Bob"
                // then invoking the inner() that's why output will be bob.


                // why not alice:
                // Even though "Alice" exists outside, inner() doesn’t use it because it finds "Bob" inside outer() first! This is called "variable shadowing"—when a new variable hides an older one with the same name.


//2 What is the mistake in the code below?



let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// everything is okk




// 3. Create a function with a nested function and log a variable from the parent function.\

function outer(){
    let user = "you";

    function nested_(){
        console.log(user);
    }
    nested_();
}

outer();


// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loops(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    };
    // console.log(i); //Uncaught ReferenceError: i is not defined
}
loops()

// console.log(i); Uncaught ReferenceError: i is not defined


function chor(){
    console.log(user); //created at questhon 3, Uncaught ReferenceError: i is not defined
}

chor()


// 6. What will be the output and why?



// console.log(a);
let a = 10; //day)10.js:75 Uncaught ReferenceError: Cannot access 'a' before initialization



// 7. Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);
}

// console.log(age);

//Only inside showAge


// 8. What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer(); //outwil be hii becouse of varialbe shadowing:
                // in inner()'s message chek the first outter function and the found message assign to hii.



            
// 9. What will be the output and why?

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();//output will be inner becouse of varialbe shadowing:


function counter() {
    let count = 0; // initialize with 0
    return function () {
        count--; // count decrement -1
        console.log(count); //printig count
    };
}

const reduce = counter(); //assinging counter() to reduce
reduce(); // output: -1 // invoking count = 0 -1 = -1
reduce(); // output: -2 //invoking count = -1 - 1 = -2

