var currentBankroll = 100;

while (currentBankroll > 0) {
  do {
    var bet = prompt("You have $" + currentBankroll + " How Much you wanna bet? ($5 - $10)");
  } while (isBetValid(bet) == false);

  do {
    var guess = prompt("Guess a number (1 - 10)");
  } while (isGuessValid(guess) == false);
  var target = Math.floor(Math.random() * 10);
  var result = makeBet(bet, guess, target);
  alert("Your bet was $" + bet + ", Your guess was " + guess + ", The correct answer was " + target + ", You get $" + result);
  currentBankroll = +currentBankroll + +result;
}

function isBetValid(bet) {
  if ((bet >= 5) & (bet <= 10)) {
    return true;
  }
  else {
    return false;
  }
};

function isGuessValid(guess) {
  if ((guess >= 1) & (guess <= 10)) {
    return true;
  }
  else {
    return false;
  }
};

// calculates result of bet in $ positive for win, negative for loss, 0 if off by one.
function makeBet(bet, guess, target) {
  var howClose = Math.abs(target - guess);
  switch (howClose){
  case 0:
    return bet * 2;
    break;
  case 1:
    return bet;
    break;
  default:
    return 0 - bet;
    break;
  }
}
