var Letter = require('./letter.js');

var alphabetExpression = /[a-z]|[0-9]/i;

function Movie(target) 
{
	this.target = target;
	this.targetMovie = target.toUpperCase().split('');

	this.createDisplayMovie = function() 
	{
		var movieArray = [];

		for (var i = 0; i < this.target.length; i++)
		{
			if (alphabetExpression.test(this.target[i]))
			{
				movieArray.push(new Letter(this.target[i].toUpperCase()));
			} 
			else 
			{
				movieArray.push(this.target[i])
			}
		}
		return movieArray;
	};

	this.displayMovie = this.createDisplayMovie();
	this.checkAlphaInput = function(letter) 
	{
		var youAreRight = false;

		for (var index in this.targetMovie) 
		{
			if (letter.toUpperCase() === this.targetMovie[index]) 
			{
				this.displayMovie[index].guessed = true;
				youAreRight = true;
			}
		}
		return youAreRight;
	};

	this.GetMovie = function()
	{
		return this.targetMovie.join('');
	};
	
	this.getMovieToShow = function()
	{
		var show = '';

		for (var index in this.displayMovie)
		{
			if (alphabetExpression.test(this.displayMovie[index])) 
			{
				show += this.displayMovie[index].getChar();
			} 
			else
			{
				show += this.displayMovie[index];
			}
		}
		return show;
	}
}
module.exports = Movie;




