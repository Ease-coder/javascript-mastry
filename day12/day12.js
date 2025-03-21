// . What will be the output and why?


const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

/* the output will be "Not provide" because ?? operator returns right hand operand if left hand operant is null and undefined. Otherwise returns left hand operand. */


// 2. What will happen if we try to modify a frozen object?


const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
//  nothing will happen because freeze make immutable, so that a's value still be same.


// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring



const porson = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
console.log(porson);

const person2 = structuredClone(porson);
person2.location.city = "Delhi";
console.log(person2);







// 4. Build a Student Management System


// Store student details in an object (name, age, grades).

// Implement a method to calculate the average grade.


let student = {
    name : "lucky",
    age : 19,
    grade : [55, 52, 50],
    avgGrade : function() {
        let sum = this.grade.reduce((acc, val) => acc + val, 0);
        return sum / this.grade.length;
    }
}

console.log(student.avgGrade());



// 5. Book Store Inventory System


// Store books in an object.
// Add functionality to check availability and restock books.

const books = {
    bookName : ["book1", "book2", "book3", "book4"],
    availability: function(){
        let book = prompt("enter book name");      
        if(this.bookName.includes(book)){
            console.log(`your ${book} book available`);
        }else{
            console.log(`your ${book} book not available`);
        }
        
    }
}
console.log(books.availability());


// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

/* object.key returns array of properties.
for example:
            let obj = {
                name : lily,
                age : 87, 
                rollno. : 9
            }
            
            console.log(obj.keys()) output will be ["name", "age", "rollno."]
where object.entries returns array of objects in key value pair where properties is key and assigned value is value
for example:   
            console.log(obj.entries()); output will be 3) [Array(2), Array(2), Array(2)]
            [['name', 'lily'],['age', 87], ['rollno', 9]]
*/




// 8. What will be the output and why?

const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
// output willl be Doe because in this case newPerson assigning to person(call by reference) that's way if we are changing in newPerson then automaticly changes reflect on person and vise-versa.










// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// Best way to to deeply copy a nested object is 'structuredClone()' because it can handels functions, undefined, Date, Map, set, etc 

















// 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let {name, address, age} of users){
    console.log(name, address, age);
}