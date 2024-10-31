
let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    return Math.random() > 0.5 ? "rock" : (Math.random() > 0.5 ? "paper" : "scissors");
}

function getHumanChoice()
{
    return prompt("Enter rock, paper or scissors: ");
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice)
    {
        return ("Draw. " + humanChoice + " neutralizes " + computerChoice);
    }

    if ((humanChoice == "rock"     && computerChoice == "scissors") ||
        (humanChoice == "paper"    && computerChoice == "rock")     ||
        (humanChoice == "scissors" && computerChoice == "paper"))
    {
        humanScore++;
        return ("Human Wins! " + humanChoice + " beats " + computerChoice);
    }
    else
    {
        computerScore++;
        return ("Computer Wins! " + humanChoice + " loses to " + computerChoice);
    }
}

console.log("Hello World. Rock Paper Scissors.")

while (humanScore + computerScore < 5) // There may be draws. Lets make it really 5.
{
    console.log(playRound(getHumanChoice(), getComputerChoice()));
}

if (humanScore == computerScore)
{
    console.log(`Its a tie! Human[${humanScore}] to Computer[${computerScore}]`)
}
else if (humanScore > computerScore)
{
    console.log(`Human Wins! Human[${humanScore}] to Computer[${computerScore}]`)
}
else
{
    console.log(`Computer Wins! Human[${humanScore}] to Computer[${computerScore}]`)
}