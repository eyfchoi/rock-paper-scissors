let humanScore = 0;
let computerScore = 0;

// Memory Usage can be improved with an Event Delagator at div#buttons.
document.querySelectorAll(".choice").forEach((element) => element.addEventListener("click", (e) => {

    if (humanScore + computerScore >= 5)
        return;

    let humanChoice    = e.target.id;
    let computerChoice = Math.random() > 0.5 ? "rock" : (Math.random() > 0.5 ? "paper" : "scissors");
    let p = document.querySelector("#result-area");

    if (humanChoice == computerChoice)
    {
        p.textContent += "Draw. " + humanChoice + " equals " + computerChoice;
    }
    else if ((humanChoice == "rock"     && computerChoice == "scissors") ||
             (humanChoice == "paper"    && computerChoice == "rock")     ||
             (humanChoice == "scissors" && computerChoice == "paper"))
    {
        humanScore++;
        p.textContent += "Human Wins! " + humanChoice + " beats " + computerChoice;
    }
    else
    {
        computerScore++;
        p.textContent += "Computer Wins! " + humanChoice + " loses to " + computerChoice;
    }

    p.textContent += '\n';   

    if (humanScore + computerScore >= 5)
    {
        if (humanScore == computerScore)
            p.textContent += `Its a tie! Human[${humanScore}] to Computer[${computerScore}]`;
        else if (humanScore > computerScore)
            p.textContent += `Human Wins! Human[${humanScore}] to Computer[${computerScore}]`;
        else
            p.textContent += `Computer Wins! Human[${humanScore}] to Computer[${computerScore}]`;

        p.textContent += '\n';   
    }  
}));