function guessTheNumber(callback){
    
    const computerGuess = Math.floor(Math.random()*10) + 1;
    
    for(let i = 3; i > 0; i--){
        let userGuess =Number( prompt("Guess the number between 1 to 10"));
        if(userGuess === computerGuess){
            console.log("You WON! you guessed the right number.");
            return;
        }else if(userGuess < computerGuess){
            console.log("You guessed lower then actual number.");
        }else{
            console.log("you guessed big number then actual.");
        }


        if (i > 1) {
            console.log(`You have ${i - 1} chances left.`);
        } else {
            console.log(`Game over! The correct number was ${computerGuess}.`);
        }

    }
  

    playagain = prompt("Do you want to play again ? (yes/no)").toLocaleLowerCase
    if (playagain == "yes"){
        guessTheNumber(callback);
    }else{
        console.log("okk bye play again!")
    }
}



guessTheNumber()