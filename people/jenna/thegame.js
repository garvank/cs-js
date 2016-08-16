<script>
counter = 0
counterL = 0

function newGame() {
	var answer = randBetween(1, 10);
	var guess = ask(answer);
	var counter = 0;
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
	}

function ask(answer) {
	var guess = prompt('Agent 0028, your mission is to enter the correct number between 1 and 10.');
	check(guess, answer); 
} 

function hint(guess, answer) {
	counter++;
	if (counter < 4 && guess < answer) {
			alert('Your guess ' + guess + ' was less than the answer.');
			ask(answer);
		} else if (counter < 4 && guess > answer) {
			alert('Your guess ' + guess + ' was greater than the answer.');
			ask(answer);
		} else {
    	alert('Your mission has failed. The number was ' + answer);
    	return false;
  		}

}

function check(guess, answer) {
	if (answer == guess) {
		newLeveL();
	} else {
		hint(guess,answer);
	}
}

function newLeveL() {
	var answerL = randBetween(378, 394);
	var guessL = askL(answerL);
	var counter = 0;
}

function askL(answerL) {
	var guessL = prompt('Congratulations. Your next mission is to enter the correct number between 378 and 394.');
	check(guessL, answerL); 
} 

function hintL(guessL, answerL) {
	counter++;
	if (counterL < 4 && guessL < answerL) {
			alert('Your guess ' + guess + ' was less than the answer.');
			askL(answerL);
		} else if (counterL < 8 && guessL > answerL) {
			alert('Your guess ' + guessL + ' was greater than the answer.');
			askL(answerL);
		} else {
    	alert('Your mission has failed. The number was ' + answer);
    	return false;
  		}

}

function checkL(guessL, answerL) {
	if (answerL == guessL) {
		alert('You might have won this game...but you lost the game.');
	} else {
		hint(guessL,answerL);
	}
}

</script>
