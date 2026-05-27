// Number Guesser game
const guessField = document.getElementById('guessField');
const submitBtn = document.getElementById('subt');
const guessesSpan = document.querySelector('.guesses');
const remainingSpan = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];

function updateUI() {
    guessesSpan.textContent = previousGuesses.join(', ');
    remainingSpan.textContent = attempts;
}

function endGame(message) {
    lowOrHi.textContent = message;
    guessField.disabled = true;
    submitBtn.disabled = true;

    const restart = document.createElement('button');
    restart.textContent = 'Start new game';
    restart.id = 'restart';
    restart.style.marginTop = '14px';
    restart.addEventListener('click', resetGame);
    document.getElementById('wrapper').appendChild(restart);
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    previousGuesses = [];
    guessField.disabled = false;
    submitBtn.disabled = false;
    guessField.value = '';
    lowOrHi.textContent = '';
    updateUI();
    const restart = document.getElementById('restart');
    if (restart) restart.remove();
    guessField.focus();
}

function handleGuess(e) {
    e.preventDefault();
    const userGuess = Number(guessField.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        lowOrHi.textContent = 'Please enter a number between 1 and 100.';
        guessField.focus();
        return;
    }

    previousGuesses.push(userGuess);
    attempts -= 1;
    updateUI();

    if (userGuess === randomNumber) {
        endGame(`Congratulations! ${userGuess} is correct.`);
        return;
    }

    if (attempts === 0) {
        endGame(`Game over. The number was ${randomNumber}.`);
        return;
    }

    lowOrHi.textContent = userGuess < randomNumber ? 'Too low. Try again.' : 'Too high. Try again.';
    guessField.value = '';
    guessField.focus();
}

// wire up form submit (supports pressing Enter)
const form = document.querySelector('.form');
form.addEventListener('submit', handleGuess);

// initialize UI
updateUI();
guessField.focus();