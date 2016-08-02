function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ask(answer) {
  var guess = prompt('Please enter a number between 1 and 10');

  if (guess < 1 || guess > 10) {
    ask();
  } else {
    check(guess, answer);
  }
}

function check(guess, answer) {
  if (guess == answer) {
    alert('You win! ' + answer + ' = ' + guess);
  } else {
    hint(guess, answer);
  }
}

function hint(guess, answer) {
  if (guess < answer) {
    alert('Hint: Your guess (' + guess + ') is less than the answer');
  } else {
    alert('Hint: Your guess (' + guess + ') is more than the answer');
  }

  ask(answer);
}

function newGame() {
  var answer = randBetween(1, 10);
  var guess  = ask(answer);
}
