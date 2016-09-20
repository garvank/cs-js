
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
	}

function ask(answer) {
	var guess = prompt('Please enter a number between 1 and 10');
	check(guess, answer); 
} 

function hint(guess, answer) {
	if (guess < answer) {
		alert('Your guess ' + guess + ' was less than the answer.');
	} else {
		alert('Your guess ' + guess + ' was greater than the answer.');
	}

	ask(answer);
}

function check(guess, answer) {
	if (answer == guess) {
		alert('You win!');
	} else {
		hint(guess,answer);
	}
}

function newGame() {
	var answer = randBetween(1, 10);
	var guess = ask(answer);

}