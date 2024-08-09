let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const computerscorePara = document.querySelector("#computer-score");

const genComputerChoice =() =>{
    const options =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =() => {
    msg.innerText= "game was draw. play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner =(userWin, userChoice,computerChoice) =>{
    if(userWin)
    {
        userscore++;
        userscorePara.innerText =userscore;
        msg.innerText ='you win! ${userChoice} beats ${computerChoice}';
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        computerscorePara.innerText =computerscore;
       
        msg.innerText ='you lose. ${computerChoice} beats your ${userCoice}';
        msg.style.backgroundColor="red";
    }
};

const playGame =(userChoice) => {
    
    const computerChoice = genComputerChoice();
    
    if(userChoice=== computerChoice)
    {
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="rock")
        {
            userWin=computerChoice ==="paper"? false :true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice ==="scisors"?false :true;
        }
        else{
            userWin= computerChoice==="rock" ?false:true
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice)  =>{
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
   
        playGame(userChoice);
    });
});