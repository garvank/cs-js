

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ask(answer) {
	var guess = prompt('Would you like to a play game?  Please enter a number between 1 and 10');
	check(guess, answer);
}

function hint(guess, answer){
	if (guess < answer) {
		alert('You are the worst guesser ever.  Your guess ' + 'is less than the answer');
	} else {
		if (guess > answer){
			alert('Seriously?.  Your guess ' + ' is more than the answer');
		}
	}

	ask(answer);
}

function check(guess, answer) {
		if (answer == guess) {
		alert("You win!");
	} else {
		hint(guess, answer);
	}
}

function newGame() {
	var answer = randBetween(1, 10);
	var guess = ask(answer);


}