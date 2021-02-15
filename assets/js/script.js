// Global variables

let playerScore = 0;
let compScore = 0;
let showScore = document.getElementById("scoreCounter");
let userBtn = document.querySelectorAll("#hands button");
let resetBtn = document.getElementById("reset");
let commentField = document.getElementById("comment");
let gameRounds = 0;
let allRounds = document.getElementsByName("rounds");
let compComment = document.getElementById("compComment");

let popUp = document.createElement("span");
popUp.classList.add("popup");
document.body.appendChild(popUp);

// Play game

function playGame() {
  let userBtn = document.querySelectorAll("#hands button");
  userBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Computer
      let compPick = ["rock", "paper", "scissors"];
      let compGuess = compPick[Math.floor(Math.random() * compPick.length)];
      //   Play game
      if (btn.id === compGuess) {
        commentField.innerHTML = "It's a tie";
        compComment.innerHTML = "Comp says: Great minds think alike";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      } else if (compGuess === "rock" && btn.id === "paper") {
        playerScore += 1;
        commentField.innerHTML = `${btn.id} (user) beats ${compGuess} (comp)`;
        compComment.innerHTML = "Comp says: Lucky guess";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      } else if (compGuess === "paper" && btn.id === "scissors") {
        playerScore += 1;
        commentField.innerHTML = `${btn.id} (user) beats ${compGuess} (comp)`;
        compComment.innerHTML = "Comp says: Beginner's luck";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      } else if (compGuess === "scissors" && btn.id === "rock") {
        playerScore += 1;
        commentField.innerHTML = `${btn.id} (user) beats ${compGuess} (comp)`;
        compComment.innerHTML = "Comp says: Cheating is not allowed";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      } else if (compGuess === "rock" && btn.id === "scisors") {
        compScore += 1;
        commentField.innerHTML = `${compGuess} (comp) beats ${btn.id} (user)`;
        compComment.innerHTML = "Comp says: You're better than this";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      } else if (compGuess === "paper" && btn.id === "rock") {
        compScore += 1;
        commentField.innerHTML = `${compGuess} (comp) beats ${btn.id} (user)`;
        compComment.innerHTML = "Comp says: I don't have time for this";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      } else if (compGuess === "scissors" && btn.id === "paper") {
        compScore += 1;
        commentField.innerHTML = `${compGuess} (comp) beats ${btn.id} (user)`;
        compComment.innerHTML = "Comp says: Seriously???";
        showScore.innerHTML = `${playerScore} : ${compScore}`;
      }
    });
  });
}

// Play rounds

function playRounds() {
  allRounds.forEach((inputRound) => {
    inputRound.addEventListener("click", (e) => {
      playGame();
      userBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          gameRounds += 1;
          if (gameRounds == inputRound.value) {
            userBtn.forEach((b) => {
              popUp.innerHTML = "Maximum rounds played &#129299;";
              popUp.classList.toggle("showPopup");
              b.disabled = true;
              b.classList.add("disabled");
            });
            if (playerScore === compScore) {
              commentField.innerHTML = "It's a draw";
              compComment.innerHTML = "Comp says: I will get you next time";
            } else if (playerScore > compScore) {
              commentField.innerHTML = "Congrats! You beat the computer!";
              compComment.innerHTML = "Comp says: I want a rematch!";
            } else if (playerScore < compScore) {
              commentField.innerHTML = "You lost. Well, better luck next time";
              compComment.innerHTML =
                "Comp says: I love winning. Winning is my favourite!";
            }
          }
        });
      });
    });
  });
}

playRounds();

// Restart game

resetBtn.addEventListener("click", (e) => {
  window.location.reload();
});
