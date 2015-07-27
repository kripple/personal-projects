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
	"anchorage": "n. the desire to hold on to time as it passes, like trying to keep your grip on a rock in the middle of a river, feeling the weight of the current against your chest while your elders float on downstream, calling over the roar of the rapids, \“Just let go—it’s okay—let go.\” - John Koenig's Dictionary of Obscure Sorrows",
	"anemoia": "n. nostalgia for a time you’ve never known—Imagine stepping through the frame into a sepia-tinted haze, where you could sit on the side of the road and watch the locals passing by. Who lived and died before any of us arrived here, who sleep in some of the same houses we do, who look up at the same moon, who breathe the same air, feel the same blood in their veins—and live in a completely different world. - John Koenig's Dictionary of Obscure Sorrows",
	"chrysalism": "n. the amniotic tranquility of being indoors during a thunderstorm, listening to waves of rain pattering against the roof like an argument upstairs, whose muffled words are unintelligible but whose crackling release of built-up tension you understand perfectly. - John Koenig's Dictionary of Obscure Sorrows",
	"exulansis": "n. the tendency to give up trying to talk about an experience because people are unable to relate to it—whether through envy or pity or simple foreignness—which allows it to drift away from the rest of your life story, until the memory itself feels out of place, almost mythical, wandering restlessly in the fog, no longer even looking for a place to land. - John Koenig's Dictionary of Obscure Sorrows",
	"heartworm": "n. a relationship or friendship that you can’t get out of your head, which you thought had faded long ago but is still somehow alive and unfinished, like an abandoned campsite whose smoldering embers still have the power to start a forest fire. - John Koenig's Dictionary of Obscure Sorrows",
	"kenopsia": "n. the eerie, forlorn atmosphere of a place that’s usually bustling with people but is now abandoned and quiet—a school hallway in the evening, an unlit office on a weekend, vacant fairgrounds—an emotional afterimage that makes it seem not just empty but hyper-empty, with a total population in the negative, who are so conspicuously absent they glow like neon signs. - John Koenig's Dictionary of Obscure Sorrows",
	"liberosis": "n. the desire to care less about things—to loosen your grip on your life, to stop glancing behind you every few steps, afraid that someone will snatch it from you before you reach the end zone—rather to hold your life loosely and playfully, like a volleyball, keeping it in the air, with only quick fleeting interventions, bouncing freely in the hands of trusted friends, always in play. - John Koenig's Dictionary of Obscure Sorrows",
	"onism": "n. the awareness of how little of the world you will experience—Imagine standing in front of the departures screen at an airport, flickering over with strange place names like other people’s passwords, each representing one more thing you’ll never get to see before you die—and all because, as the arrow on the map helpfully points out, you are here. - John Koenig's Dictionary of Obscure Sorrows",
	"sonder": "n. the realization that each random passerby is living a life as vivid and complex as your own—populated with their own ambitions, friends, routines, worries and inherited craziness—an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk. - John Koenig's Dictionary of Obscure Sorrows",
	"vellichor": "n. the strange wistfulness of used bookstores, which are somehow infused with the passage of time—filled with thousands of old books you’ll never have time to read, each of which is itself locked in its own era, bound and dated and papered over like an old room the author abandoned years ago, a hidden annex littered with thoughts left just as they were on the day they were captured. - John Koenig's Dictionary of Obscure Sorrows"
};

// Press 'new-game' button -> 
// select random word from dictionary object
//modified from http://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object

var randomKey = function (obj) {
	var keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0];
};	

var display_gallows = function(num) {
	switch(num) {
    case 1:
    	$("pre").empty()
		$("pre").append("   ________\n");
		$("pre").append("   |/     |\n");
		$("pre").append("   |      |_\n");
		$("pre").append("   |      (_)\n");
		$("pre").append("   |\n");
		$("pre").append("   |\n");
		$("pre").append("   |\n");
		$("pre").append("  _|___\n");
        break;
    case 2:
        $("pre").empty()
		$("pre").append("   ________\n");
		$("pre").append("   |/     |\n");
		$("pre").append("   |      |_\n");
		$("pre").append("   |      (_)\n");
		$("pre").append("   |       |\n");
		$("pre").append("   |       |\n");
		$("pre").append("   |\n");
		$("pre").append("  _|___\n");
        break;
    case 3:
    	$("pre").empty()
		$("pre").append("   ________\n");
		$("pre").append("   |/     |\n");
		$("pre").append("   |      |_\n");
		$("pre").append("   |      (_)\n");
		$("pre").append("   |       |/\n");
		$("pre").append("   |       |\n");
		$("pre").append("   |\n");
		$("pre").append("  _|___\n");
        break;
    case 4:
    	$("pre").empty()
		$("pre").append("   ________\n");
		$("pre").append("   |/     |\n");
		$("pre").append("   |      |_\n");
		$("pre").append("   |      (_)\n");
		$("pre").append("   |      \\|/\n");
		$("pre").append("   |       |\n");
		$("pre").append("   |\n");
		$("pre").append("  _|___\n");
        break;
    case 5:
    	$("pre").empty()
		$("pre").append("   ________\n");
		$("pre").append("   |/     |\n");
		$("pre").append("   |      |_\n");
		$("pre").append("   |      (_)\n");
		$("pre").append("   |      \\|/\n");
		$("pre").append("   |       |\n");
		$("pre").append("   |        \\\n");
		$("pre").append("  _|___\n");
        break;
    case 6:
		$("pre").empty()
		$("pre").append("   ________\n");
		$("pre").append("   |/     |\n");
		$("pre").append("   |      |_\n");
		$("pre").append("   |      (_)\n");
		$("pre").append("   |      \\|/\n");
		$("pre").append("   |       |\n");
		$("pre").append("   |      / \\\n");
		$("pre").append("  _|___\n");
        break;
	};
};

// NEW GAME 
$(document).ready(function(){

	var solution = randomKey(dictionary); 
	var blank_letters = [];
	var solution_array = solution.split("");

	for (var i = 0 ; i < (solution.length * 2 ) ; i += 2 ) {
		blank_letters[i] = "_";
		blank_letters[i+1] = " ";
	};

	var win = false;
	var lose = false;
	var match = false;

	gallows_counter = 0;

	// display blank spaces
	$(".blank-letters").empty().append(blank_letters);

	// Enter a letter  (doesn't work if win or lose = true) ->
	document.onkeypress=function(evt){

		if( evt.keyCode == 13 ) {
			var letter = $(".input-box").val();
			$(".input-box").val("");

			// modified from: http://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
			//(I don't understand regexes yet)
			// this code is checking for bad input
			if (!(letter.length === 1 && letter.match(/[a-z]/i)))  
				alert("ERROR: Bad input. Please enter a single character."); 
			else {
				match = false;

				for (var i = 0 ; i < solution.length ; i++ ) {

					if (solution_array[i] == letter) {
						
						match = true;
						//change blank-letter to guessed letter
						blank_letters[i*2] = letter;
						//check if win? == true
						win = true;
						for (var j = 0 ; j < (solution.length * 2 ) ; j += 2 ) {
							if ( blank_letters[j] == "_" ) {
								win = false;
							}
						};
						$(".blank-letters").empty().append(blank_letters);
					};


				};

				if (match == false) {
					//add to bad letters
					$(".bad-letters").append(" " + letter);
					gallows_counter ++;
					if (gallows_counter >= 6) {
						lose = true;
					};
					display_gallows(gallows_counter);
				};

			
			};
		};

		if (win == true) {
			// display definition
			$(".definition").empty().append("Congratulations! The definition of " + solution + " is: ");
			$(".definition").append(dictionary[solution]);
		};
		if (lose == true) {
			$(".definition").empty().append("Better luck next time!");
			$(".definition").css({'text-align':'center'}).hide().fadeIn(1);
		};
	};

} );


// --- Initial Code --- //


// --- Refactored Code --- //

// Do something about uppercase letters
// fails silently if you enter a letter that's already been matched - have an alert popup
// don't allow duplicates in the bad word bank

// --- Reflection --- //

// .html() and .text() do not work on input tags. Need to use val() instead
// same thing with trying to empty it - need to use .val("") instead of .empty()

// note to self - use different iteration variables when nesting for loops


