let userScore = 0;
let aiScore = 0;
let span = document.getElementById('closeButton')[0];
let modal = document.getElementById('myModal');
let result = 'Select a button to begin.';
let userHand = 'insert picture';
let aiHand = 'insert picture';
document.getElementById('userScore').innerHTML = userScore;
document.getElementById('aiScore').innerHTML = aiScore;
document.getElementById('result').innerHTML = result;
document.getElementById('userHand').innerHTML = userHand;
document.getElementById('aiHand').innerHTML = aiHand;
//the round function is using an arrow function () => I am not entirely sure what it does I should research

// use a modal box to pop-up when the player reaches 5 points then the button on the modal box will reset the scores to 0
// add an event to reset the score when the span button is selected
function round() {
  rockButton.addEventListener('click', () => getRoundResult('Rock'));
  paperButton.addEventListener('click', () => getRoundResult('Paper'));
  scissorsButton.addEventListener('click', () => getRoundResult('Scissors'));
  closeButton.addEventListener('click', () => resetClose(aiScore, userScore));
}

round();

function getAiPick() {
  let aiPick= Math.floor(Math.random() * 3) + 1;
    switch (aiPick) {
      case 1:
        return 'Rock';
        break;
      case 2:
        return 'Paper';
        break;
      case 3:
        return 'Scissors';
        break;
    }

}

function getRoundResult(userPick) {
  let aiPick = getAiPick();
    switch (userPick + aiPick) {
      case 'RockPaper':
      case 'PaperScissors':
      case 'ScissorsRock':
        userLoseRound(userPick, aiPick);
        break;
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
        userWinRound(userPick, aiPick);
        break;
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
        drawRound(userPick, aiPick);
        break;
    }
}

function userLoseRound(userPick, aiPick) {
  aiScore++;
  if (aiScore >=  3) {
    openModal();
  }
  result = aiPick + ' beats ' + userPick+ ', you lose!';
  document.getElementById('result').innerHTML = result;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
  document.getElementById('finalRoundResult').innerHTML = result;
}


function userWinRound(userPick, aiPick) {
  userScore++;
  if (userScore >= 3) {
    openModal();
  }
  result = userPick + ' beats ' + aiPick+ ', you win!';
  document.getElementById('result').innerHTML  = result;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
  document.getElementById('finalRoundResult').innerHTML = result;
}

function drawRound(userPick, aiPick) {
  result = ' Both players chose ' + userPick+ ', it is a draw!';
  document.getElementById('result').innerHTML = result;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
}

function openModal() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal

function resetClose() {
  aiScore = 0;
  userScore = 0;
  result = 'Play Again!';
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
  document.getElementById('result').innerHTML = result;
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      aiScore = 0;
      userScore = 0;
      result = 'Play Again!';
      document.getElementById('userScore').innerHTML = userScore;
      document.getElementById('aiScore').innerHTML = aiScore;
      document.getElementById('result').innerHTML = result;
      modal.style.display = 'none';
  }
}
