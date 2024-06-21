let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

//Generate computer Choice ==> modular way of programming
const genCompChoice =() =>{
    let options = ["rock","paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
         msg.innerText = `You Lose Your ${userChoice} beaten by ${compChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
     msg.innerText = `Game was Draw.Play Again`
     msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice, compChoice);
    }
   
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
