$(function() {
  var STARTING_CASH = 100;
  var MIN_BET = 5;
  var MAX_BET = 10;
  var MIN_GUESS = 1;
  var MAX_GUESS = 10;

  $('#money').val(STARTING_CASH);

  $('#guess-button').on('click', guess);

  $('#reset-button').on('click', reset);

  function reset() {
    $('#money').val(STARTING_CASH);
    $('#guess').val(5);
    $('#bet').val(5);
    $('#the-number').val("");
  };

  function guess() {
    if (!checkValidValues()) {
      alert("Invalid!");
      return;
    }
    var randomNumber = Math.ceil(Math.random() * MAX_GUESS)
    $('#the-number').val(randomNumber);
    
    profit = makeBet(randomNumber) // profit can (and often will) be negative

    currentMoney = parseInt($('#money').val(), 10);
    $('#money').val(currentMoney + profit);
  };

  function makeBet(randomNumber) {
    bet = parseInt($('#bet').val(), 10);
    guess = parseInt($('#guess').val(), 10);
    var howClose = Math.abs(randomNumber - guess);

    switch (howClose){
    case 0:
      return bet * 2;
      break;
    case 1:
      return 0;
      break;
    default:
      return 0 - bet;
      break;
    }
  };

  function checkValidValues() {
    bet = parseInt($('#bet').val(), 10);
    guess = parseInt($('#guess').val(), 10);
    money = parseInt($('#money').val(), 10);
    if ((bet <= money) & (bet >= MIN_BET) & (bet <= MAX_BET) & (guess >= MIN_GUESS) & (guess <= MAX_GUESS)) {
      return true;
    }
    return false;
  };

});

