  
const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Play Match
    const letsPlay = () => {
      const options = document.querySelectorAll(".moves button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
    
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          });
 
        });
      });  
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Tie!";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "You Rock!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You loose!";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Ouch!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Hell yes!";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Not today...";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You win!";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //call all the inner function

    letsPlay();
  };
  
  //start the game function
  game();