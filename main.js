var inquirer = require('inquirer');
 
var GameJS = require('./game.js');

var game = new GameJS();

// Start game
function startHangman() 
{
	game.beginNewGame();
	promptRunInput();
}


function promptRunInput() 
{
	console.log(game.movie.getMovieToShow());
	inquirer.prompt([
	{
		type: 'input',
		name: 'userGuess',
		message: 'Please enter your guess for a Best Picture Oscar winner:',
		validate: function (value) 
		{

			var correctInput = /[a-z]|[0-9]/i;

			//confirm if repeated guess
			if (value.length === 1 && correctInput.test(value))
			{
				return true;
			} 
			else 
			{
				console.log('failed');
				return 'Enter a valid letter:';
			}

		}
	}
	]).then(function(answer)
	{
		// User's guess is converted to upper case
		var userGuess = answer.userGuess.toUpperCase();
		
		if (game.usedAlpha.indexOf(userGuess) === -1) 
		{
			game.usedAlpha.push(userGuess);
			
			var correct = game.movie.checkAlphaInput(userGuess);

			if (correct) 
			{
				game.produceOutcomes("correct");
			} 
			else 
			{
				game.remainingLives--;
				game.produceOutcomes("incorrect");
			}
		} 
		else 
		{
			game.produceOutcomes("already");
		}

		var userWins = game.movie.getMovieToShow() === game.movie.GetMovie();
		console.log(userWins);

		if (userWins) 
		{
			game.wins++;
			console.log("You Win!" + " " + game.movie.getMovieToShow());
		} 
		else if (game.remainingLives > 0) 
		{
			promptRunInput();
		} else 
		{
			game.loss++;
			console.log("Too many guesses,you lose!");
		}
	});
}

// Start game
startHangman();

