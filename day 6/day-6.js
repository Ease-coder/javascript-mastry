// 1. Write a Function to Convert Celsius to Fahrenheit

function CelsiusToFahrenhiet(cel){
    let fahrenhiet = (cel * 9/5) + 32;
    return fahrenhiet;
}

console.log(CelsiusToFahrenhiet(50));



// Create a Function to Find the Maximum of Two Numbers

function findMax(a,b){
    return Math.max(a,b);
}

console.log(findMax(5, 10));



// // Function to Check if a String is a Palindrome

function chekPalindrom(str){
    let reversedStr = str.split("").reverse().join("")
    return str === reversedStr;
}

console.log(chekPalindrom("nitin"));


// . Write a Function to Find Factorial of a Number

function fact(n){
    let f = 1
    for (let i = 1; i <= n; i++){
        f *= i ;
        console.log(f);
    }
}

fact(5);




// Write a function to Count Vowels in a String

function countVowels(str){
    const count = str.match(/[aeiou]/gi).length;
    return count
}

console.log(countVowels("so count my vouwels"));





// Write a Function to Capitalize the First Letter of Each Word in a Sentence

// function capitalizeWords(sentence){
//     return sentence.();
// }

// console.log(capitalizeWords("hello i'm lucky and want to capitalize my whole sentence"));





// // Use an IIFE to Print “Hello, JavaScript!”

console.log((function(){
    return "Hello, JavaScript!"
})());




// // Create a Simple Callback Function

function greet(name, callback){
    console.log("hello " + name);
    callback();
}

function bye(){
    console.log("goodbye");
}

console.log(greet("lucky", bye));

