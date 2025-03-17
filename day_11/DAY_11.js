// 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); //2 
// The function inner() has access to count because of closures.
// count persists in memory even after outer() finishes executing.
// Each time counter() is called:
//         count++ increments the stored value.
//         The new value is logged.
// A closure allows an inner function to remember variables from its lexical scope even after the outer function has executed.


// 2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); // 100 
        // clousure allows an inner function to remember variable from it lexical scope.


// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.




















// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.


function createMultiplier(multiplier){


    return function mul(number){
        return number * multiplier;
    }
}

const mul = createMultiplier(2);
console.log(mul(4));




// 5. What happens if a closure references an object?

// The object remains in memory as long as the closure exists




// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function factories(){
    let counter = 0;
    return {
        "increase" : () => {
            counter++;
            return `increases ${counter}`;
        },

        "decrease" : () => {
            counter++;
            return `decreases ${counter}`;
        },

        "reset": () => {
            counter = 0;
            return `counter has been reset, now counter is: ${counter}`;
        }
    };
}

const factory = factories();
console.log(factory.increase());
console.log(factory.reset());
console.log(factory.increase());
console.log(factory.increase());
console.log(factory.decrease());
console.log(factory.increase());
console.log(factory.reset());