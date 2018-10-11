
var randomNumber = Math.floor(Math.random()*100) + 1;
  var guesses = document.querySelector('.guesses');
  var lastResult = document.querySelector('.lastResult');
  var lowOrHi = document.querySelector('.lowOrHi');
  var guessSubmit = document.querySelector('.guessSubmit');
  var guessField = document.querySelector('.guessField');
  var guessCount = 1;
  var resetButton;
  var resetParas = document.querySelectorAll('.resultParas p');
  var name = prompt("Enter your name:");
  var elem = document.getElementById("name").innerHTML = "<b>" +name +"</b>" + "!! " +"Enter Numbers Between 1 and 100.";
  function checkGuess() {

    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      randomNumber = Math.floor(Math.random()*100) + 1;
      console.log(randomNumber);
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  function setGameOver() {
	  guessField.disabled = true;
	  guessSubmit.disabled = true;
	  resetButton = document.createElement('button');
	  resetButton.textContent = 'Start new game';
	  document.body.appendChild(resetButton);
	  resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
	  guessCount = 1;
	  for(var i = 0; i < resetParas.length; i++) {
		  resetParas[i].textContent = '';
	  }
	  resetButton.parentNode.removeChild(resetButton);

	  guessField.disabled = false;
	  guessSubmit.disabled = false;
	  guessField.value = '';
	  guessField.focus();

	  lastResult.style.backgroundColor = 'transparent';

	  randomNumber = Math.floor(Math.random()) + 1;
  }
