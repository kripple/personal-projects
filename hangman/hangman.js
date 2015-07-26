//alert("I'm connected");

// --- Use Cases --- //

// As a Hangman User ...

// MVP:
// ------------------------------------
// I want to be able to play a new game
// I want to be able to guess letters
// I want a hangman dude to display if I guess the wrong letter
// I want a bank of bad letters
// I want my chosen letter to display if it's a matching letter
// I want to know how many letters are in the word

// Icebox:
// ------------------------------------
// I want to know what the word means (give definition, put it in a sentence)

// --- Tests --- //

// Not sure how to test JS??

// --- Pseudocode --- //

// Define Hangman Dictionary object
var dictionary = {
	"apple": "definition of apple",
	"banana": "definition of banana",
	"cherry": "definition of cherry"
};

// Press 'new-game' button -> 
	// select random word from dictionary object
	//modified from http://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
	var randomKey = function (obj) {
		var keys = Object.keys(obj)
	    return keys[ keys.length * Math.random() << 0];
	};	

	var solution = randomKey(dictionary); // needs to be more OOD, so new-game can be called multiple times


// Enter a letter (test 'input' method) (doesn't work if win or lose = true) ->
	// check if word is solved
		// if it is, make win = true
	// check if letter is in solution
		// if it is -> update blank-letters
		// if it is not -> update bad-letters & add new hangman image
			// is hangman man complete? set var lose = true

// --- Initial Code --- //

/*
        <pre>
   ________
   |/     |
   |      |_
   |      (_)
   |      
   |       
   |      
  _|___
        </pre>
        <pre>
   ________
   |/     |
   |      |_
   |      (_)
   |       |
   |       |
   |       
  _|___
        </pre>
        <pre>
   ________
   |/     |
   |      |_
   |      (_)
   |       |/
   |       |
   |       
  _|___
        </pre>
        <pre>
   ________
   |/     |
   |      |_
   |      (_)
   |      \|/
   |       |
   |      
  _|___
        </pre>
        <pre>
   ________
   |/     |
   |      |_
   |      (_)
   |      \|/
   |       |
   |        \
  _|___
        </pre>
        <pre>
   ________
   |/     |
   |      |_
   |      (_)
   |      \|/
   |       |
   |      / \
  _|___
        </pre>
*/

// --- Refactored Code --- //


