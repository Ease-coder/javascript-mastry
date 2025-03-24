// 2. What is the problem here? Fix it to log the correct name and explain the fix

// const user = {
//     name: "tapaScript",
//     greet: () => {
//       console.log(`Hello, ${this.name}!`);
//     },
//   };
  
//   user.greet();

//   mistake in this code is: greet method using arrow function so output will be window because lexically inharit from it surrounding function which is global.

//   we can fix this code by using regular function:

//   const user = {
//     name: "tapaScript",
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     },
//   };
  
//   user.greet();



//   3. Can you explain what is the problem here and fix the issue to log the correct name?


const obj = {
    name: "Tom",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  const greetFn =  obj.greet.bind(obj);
  greetFn();

// not sure about it but by luck or remebring methods this code work but now I'm not able to explain why this worked, but sure I'll look at this.



// 4. What is the problem with the following code? Why isn't it logging the name correctly?


// const user = {
//     name: "Alex",
//     greet: function () {
//       function inner() {
//         console.log(`Hello, ${this.name}!`);
//       }
//       inner();
//     },
//   };
  
//   user.greet();


// we are using regular nested function and in this case this refers to same scope (locally) where it not getting any object that's way it print only hello, undifined here is the correct code.






  const user = {
    name: "Alex",
    greet: function () {
      const inner = () => {
        console.log(`Hello, ${this.name}!`);
      }
      inner();
    },
  }
  
  user.greet();





//   5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function Sports(name, players){
    this.name = name;
    this.players = players;
}

const kapil = new Sports("kapil", 7);
console.log(kapil);

const rahul = new Sports("rahul", 9);
console.log(rahul);




// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
      console.log(`This car is a ${this.brand} ${this.model}.`);
    },
  };

  const car2 = Object.create(car1);
  car2.brand = "BMW";
  car2.model = "X1";
  car2.describe = car1.describe.call(car2);
  

  console.log(car2.describe);




//   7. What will be the output of the following code and why?


const person = {
    name: "Charlie",
    sayHello: function () {
      console.log(this.name);
    },
    sayHelloArrow: () => {
      console.log(this.name);
    },
  };
  
  person.sayHello();
  person.sayHelloArrow(); 
// output will be b: charlie and undefined because arrow function inherit from lexical surrounding scope not the same.