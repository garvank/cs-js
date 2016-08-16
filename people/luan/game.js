
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ask(answer) {
	
	var guess = prompt('Please enter a number between 1 and 10');
	document.getElementById("gameResults").innerHTML = guess;
		while (guess < 1 || guess > 10) {
			var guess = prompt('Uh oh, your number is not between 1 and 10. Please enter a new number!');
		} 
	check(guess, answer);
}

function hint (guess, answer) {
	if (guess == 'I quit' || guess == 'quit' || guess == 'exit') {
		return answer;
	} else if (guess < answer) {
		alert('Your guess ' + guess + ' was less than the answer');
	} else if (guess > answer) {
		alert('Your guess ' + guess + ' was more than the answer');
	} else {
		alert('Your guess ' + guess + ' was not a number. Please enter a number between 1 and 10')
	}
	ask(answer);
}

function check(guess, answer){
	if (answer == guess) {
		alert('You win!');
	} else {
		hint(guess, answer);
	}
}

function newGame() {
	var answer = randBetween(1, 10);
	var guess = ask(answer);
}

