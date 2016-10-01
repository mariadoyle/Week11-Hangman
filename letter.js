function Letter(character) 
{
	this.character = character;
	this.placeholder = "_";
	this.guessed = false;
	this.getChar = function()
	{
		var char = ' ';

		// when guess is right, letter guessed will appear
		if (this.guessed) 
		{
			char = this.character;
			// or else you will see _ _ _ _
		} else
		{
			char = this.placeholder;
		}
		return char;
	}
}
module.exports = Letter;
