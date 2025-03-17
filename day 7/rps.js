
function rps(callback){
    let userInput = prompt("Choose Rock 🪨, Paper 📃, or Scissor ✂️").toLowerCase();
    

    let computerInput = Math.floor(Math.random() * 3) +  1;
    console.log(computerInput);

    switch(computerInput) {
        case 1:
            computerInput = "rock";
            break;

        case 2:
            computerInput = "paper";
            break;

        case 3:
            computerInput = "scissor";
            break;



    }
    setTimeout(() => {
        
    }, 3000);

    if (
        (userInput == "rock" && computerInput == "scissor") ||
        (userInput == "scissor" && computerInput == "paper") ||
        (userInput == "paper" && computerInput == "rock") 
    ){
        console.log("Wooo hooo, You WON!");
    }else if (
        (userInput == "paper" && computerInput == "scissor") ||
        (userInput == "rock" && computerInput == "paper") ||
        (userInput == "scissor" && computerInput == "rock") 
    ){
        console.log("You lost computer Choose ", computerInput, ", And you Choose", userInput);
    }else if(
        (userInput == "scissor" && computerInput == "scissor") ||
        (userInput == "paper" && computerInput == "paper") ||
        (userInput == "rock" && computerInput == "rock") 
    ){
        console.log("Tied! computer Choose ", computerInput, ", And you Choose", userInput);
    }else{
        console.log("Kindly enter valid input 🙂")
    }
    setTimeout(() => {
        
    }, 3000);

    playagain = prompt("do you want to play again").toLowerCase();


    if(playagain == "yes"){
        setTimeout(() => {
            rps(callback);
        }, 5000);
        
    }else{
        console.log("see you again!")
    }
}

rps();