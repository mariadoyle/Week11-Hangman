var Movie = require('./word.js');

// Movie array
var movies_list = ['Braveheart', 'Chicago', 'Titanic', 'Spotlight', 'Gladiator', 'Argo'];

function GameJS()
{
	this.wins = 0;
	this.loss = 0;
	this.remainingLives = 0;
	this.usedAlpha = [];
	this.movie;

	this.beginNewGame = function()
	{
	this.remainingLives = 7;
	this.usedAlpha = [];
	this.movie = this.createRandomMovie();
	};

	this.createRandomMovie = function()
	{
		var randomMovie = movies_list[Math.floor(Math.random()* movies_list.length)];

		return new Movie(randomMovie);
	};

	this.produceOutcomes = function (str) 
	{
		// switch statement
		switch(str){
			case "correct":
				console.log('You are correct!');
				break;
			case "wrong":
				console.log('You are incorrect!');
				console.log('You have ', this.remainingLives + " guesses left");
				break;
			case "already":
				console.log('Guess is repeated!');
				break;
			default:
				console.log('error')
		}
	}
}
module.exports = GameJS;