var ostrich = document.getElementById("title");
alert("Hello, Sweetie.");


// // Gameplay -----------------------------------------------
// var kelly = new Codebreaker();
// var computer = new Mastermind();
// var my_guess = [];
// var x_var = 0;
// var n_var = 0;

// computer.display_instructions();
// var board = new game_board();
// display_board(board);
// for ( round = 0; round < 10; round++) {
// 	my_guess = kelly.guess;

// 	if (computer.evaluate_guess(my_guess,board.solution) == true ) {
		
// 		board.past_guesses[round] = my_guess;
// 		computer.tally_feedback(my_guess,board.solution);
// 		board.x_count[round] = x_var;
// 		board.n_count[round] = n_var;

// 		display_board(board,true); 
// 		console.log("");
// 		console.log("");
// 		console.log("     You figured it out this time,\n     you'll not be so lucky again!");
// 		console.log("");
// 		exit(); // <-- Is this bad practice? / What's the function for this?
// 	};

// 	board.past_guesses[round] = my_guess;

// 	computer.tally_feedback(my_guess,board.solution);
// 	board.x_count[round] = x_var;
// 	board.n_count[round] = n_var;

// 	display_board(board);
// } ;
// display_board(board,true);
// console.log("");
// console.log("     Better luck next time, puny human.");
// console.log("");
// console.log("");
// // --------------------------------------------------------

// function Codebreaker() {
// 	current_guess = [" "," "," "," "];

// 	// Change this to recieve click-based or drag-and-drop input
// 	current_guess = ["R","I","R","O"];

// 	this.guess = current_guess;
// };

// function Mastermind() {
// 	this.display_instructions = function() {
// 			console.log("");
// 			console.log("");
// 			console.log("     Break my code, halfwit, if you can ...");
// 			console.log("     I'll tell you when you've selected\n     a correct color.");
// 			console.log("     If it's in the right spot, I'll give\n     you an \"X\", if it's misplaced, an \"N\".");
// 			console.log("     You have 10 chances. Use them wisely.");
// 			console.log("");
// 		};
// 	this.evaluate_guess = function(check_this,solution) {
// 		return equals(check_this,solution);
// 	};

// 	this.tally_feedback = function(check_this,solution) {
// 		tally = [0,0]

// 		left_match_found = [false,false,false,false];
// 		right_match_found = [false,false,false,false];
// 		//each i value, each j value only get one match

// 		//there's probably a way to simplify this logic / change var names so it makes more sense 
// 		for ( k = 0 ; k < 2 ; k++ ){
// 			for ( i = 0 ; i < 4 ; i++ ) {
// 				for ( j = 0 ; j < 4 ; j++ ) {
// 					if ((check_this[i] == solution[j]) && ( left_match_found[i] == false ) && ( right_match_found[j] == false )) {
// 						if (( k == 0 ) && ( i == j )) {
// 							left_match_found[i] = true;
// 						    right_match_found[j] = true;
// 							tally[k]++; 
// 						} else if ( k == 1 ) {
// 							left_match_found[i] = true;
// 						    right_match_found[j] = true;
// 							tally[k]++;
// 						};
// 					};
// 				};
// 			};
// 		};

// 		x_var = tally[0];
// 		n_var = tally[1];
// 	};
// };

// function game_board() {
// this.past_guesses //FIXME


// = Array.new(10,Array.new(4," ")) // <-- Ruby solution

// = [[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "]];

// 	this.x_count = [0,0,0,0,0,0,0,0,0,0];
// 	this.n_count = [0,0,0,0,0,0,0,0,0,0];	
// 	soln = [" "," "," "," "];
// 	options = ["R","O","Y","G","B","I","V"]; //indices 0-6
// 	//randomly assign ROYGBIV to soln
// 	for ( i = 0; i < 4; i++ ) {
// 		soln[i] = options[randomInt(0,6)];
// 	};
// 	soln = ["V","I","R","O"];
// 	this.solution = soln;
// };

// function display_board(board,reveal) {
// 	var show_solution = reveal || false;
// 	var pg = board.past_guesses; //two level array size [10][4]
// 	var x = board.x_count; //array length 10
// 	var n = board.n_count; //array length 10
// 	var s = board.solution; //array length 4
// 	console.log("");
// 	console.log("     _________________________________");
// 	console.log("     |       |       |       |       |");
//     console.log("(1)  |   " + pg[0][0] + "   |   " + pg[0][1] + "   |   " + pg[0][2] + "   |   " + pg[0][3] + "   | X:" + x[0]);
//     console.log("     |_______|_______|_______|_______| N:" + n[0]);
//     console.log("     |       |       |       |       |");
//     console.log("(2)  |   " + pg[1][0] + "   |   " + pg[1][1] + "   |   " + pg[1][2] + "   |   " + pg[1][3] + "   | X:" + x[1]);
//     console.log("     |_______|_______|_______|_______| N:" + n[1]);
//     console.log("     |       |       |       |       |");
//     console.log("(3)  |   " + pg[2][0] + "   |   " + pg[2][1] + "   |   " + pg[2][2] + "   |   " + pg[2][3] + "   | X:" + x[2]);
//     console.log("     |_______|_______|_______|_______| N:" + n[2]);
//     console.log("     |       |       |       |       |");
//     console.log("(4)  |   " + pg[3][0] + "   |   " + pg[3][1] + "   |   " + pg[3][2] + "   |   " + pg[3][3] + "   | X:" + x[3]);
//     console.log("     |_______|_______|_______|_______| N:" + n[3]);
//     console.log("     |       |       |       |       |");
//     console.log("(5)  |   " + pg[4][0] + "   |   " + pg[4][1] + "   |   " + pg[4][2] + "   |   " + pg[4][3] + "   | X:" + x[4]);
//     console.log("     |_______|_______|_______|_______| N:" + n[4]);
//     console.log("     |       |       |       |       |");
//     console.log("(6)  |   " + pg[5][0] + "   |   " + pg[5][1] + "   |   " + pg[5][2] + "   |   " + pg[5][3] + "   | X:" + x[5]);
//     console.log("     |_______|_______|_______|_______| N:" + n[5]);
//     console.log("     |       |       |       |       |");
//     console.log("(7)  |   " + pg[6][0] + "   |   " + pg[6][1] + "   |   " + pg[6][2] + "   |   " + pg[6][3] + "   | X:" + x[6]);
//     console.log("     |_______|_______|_______|_______| N:" + n[6]);
//     console.log("     |       |       |       |       |");
//     console.log("(8)  |   " + pg[7][0] + "   |   " + pg[7][1] + "   |   " + pg[7][2] + "   |   " + pg[7][3] + "   | X:" + x[7]);
//     console.log("     |_______|_______|_______|_______| N:" + n[7]);
//     console.log("     |       |       |       |       |");
//     console.log("(9)  |   " + pg[8][0] + "   |   " + pg[8][1] + "   |   " + pg[8][2] + "   |   " + pg[8][3] + "   | X:" + x[8]);
//     console.log("     |_______|_______|_______|_______| N:" + n[8]);
//     console.log("     |       |       |       |       |");
//     console.log("(10) |   " + pg[9][0] + "   |   " + pg[9][1] + "   |   " + pg[9][2] + "   |   " + pg[9][3] + "   | X:" + x[9]);
//     console.log("     |       |       |       |       | N:" + n[9]);
//     console.log("     =================================");
//     console.log("     |       |       |       |       |");
//     if ( show_solution == true ) 
//     	console.log("     |   " + s[0] + "   |   " + s[1] + "   |   " + s[2] + "   |   " + s[3] + "   |");
//     else
//     	console.log("     |   ?   |   ?   |   ?   |   ?   |");
//     console.log("     |_______|_______|_______|_______|");
//     console.log("");
// };

// // ******************************************************* INTERNET CODE *** //
// function randomInt(min,max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
// };

// // attach the .equals method to Array's prototype to call it on any array
// function equals(array_a,array_b) {
//     // if the other array is a falsy value, return
//     if (!array_a)
//         return false;

//     // compare lengths - can save a lot of time 
//     if (array_a.length != array_b.length)
//         return false;

//     for (var i = 0, l=array_a.length; i < l; i++) {
//         // Check if we have nested arrays
//         if (array_a[i] instanceof Array && array_b[i] instanceof Array) {
//             // recurse into the nested arrays
//             if (!array_a[i].equals(array_b[i]))
//                 return false;       
//         }           
//         else if (array_a[i] != array_b[i]) { 
//             // Warning - two different object instances will never be equal: {x:20} != {x:20}
//             return false;   
//         }           
//     }       
//     return true;
// }  
// // ************************************************************************* //
