var spotsLeft = 9;
var gameEnd = false;
var playerMove = 'X';
var gameStatus = document.getElementById('display');

function place(gridLocation){
	//is the game finished?
	//yes: don't do anything
	//no: continue the function
	if (!gameEnd){
		//get the location's ID
        gameStatus.innerHTML = "Player " + playerMove + '\'s turn';
		var gridId;

		switch(gridLocation){
			case '1':
				gridId = document.getElementById('t1');
				break;
			case '2':
				gridId = document.getElementById('t2');
				break;
			case '3':
				gridId = document.getElementById('t3');
				break;
			case '4':
				gridId = document.getElementById('t4');
				break;
			case '5':
				gridId = document.getElementById('t5');
				break;
			case '6':
				gridId = document.getElementById('t6');
				break;
			case '7':
				gridId = document.getElementById('t7');
				break;
			case '8':
				gridId = document.getElementById('t8');
				break;
			case '9':
				gridId = document.getElementById('t9');
				break;
		}
		//check if spot is available
		//if not available, innerHTML stays the same
		if (gridId.innerHTML !== ''){
			gridId.innerHTML = gridId.innerHTML;
            gameStatus.innerHTML = gameStatus.innerHTML;
            playerMove = playerMove;
		}
		//if available, text is placed based on whose turn it is
		else{
			gridId.innerHTML = playerMove;
            spotsLeft -= 1;
            //is this a winning move?
	    	//yes: prohibit further place calls
	    	//no: switch to the other player
            gameOver();
		}
    }
}

function gameOver(){
    //get each element by Id
    var g1 = document.getElementById('t1');
    var g2 = document.getElementById('t2');
    var g3 = document.getElementById('t3');
    var g4 = document.getElementById('t4');
    var g5 = document.getElementById('t5');
    var g6 = document.getElementById('t6');
    var g7 = document.getElementById('t7');
    var g8 = document.getElementById('t8');
    var g9 = document.getElementById('t9');

    //see if row/column/diagonals match
    //if a match is found, set gameEnd to true and set status message to win
    if ((g1.innerHTML === g2.innerHTML && g2.innerHTML === g3.innerHTML && g3.innerHTML !== '') || (g4.innerHTML === g5.innerHTML && g5.innerHTML === g6.innerHTML && g6.innerHTML !== '') || (g7.innerHTML === g8.innerHTML && g8.innerHTML === g9.innerHTML && g9.innerHTML !== '') || (g1.innerHTML === g4.innerHTML && g4.innerHTML === g7.innerHTML && g7.innerHTML !== '') || (g2.innerHTML === g5.innerHTML && g5.innerHTML === g8.innerHTML && g8.innerHTML !== '') || (g3.innerHTML === g6.innerHTML && g6.innerHTML === g9.innerHTML && g9.innerHTML !== '') || (g1.innerHTML === g5.innerHTML && g5.innerHTML === g9.innerHTML && g9.innerHTML !== '') || (g3.innerHTML === g5.innerHTML && g5.innerHTML === g7.innerHTML && g7.innerHTML !== '')){
        gameStatus.innerHTML = playerMove + ' has won!';
        gameEnd = true;
    }

    //else if no matches and no moves, set gameEnd to true and set status message to tie
    else if (spotsLeft === 0){
        gameStatus.innerHTML = 'It\'s a tie!';
        gameEnd = true;
    }

    //else, it's false and status switches to other player
    else{
        if (playerMove === 'X'){
            playerMove = 'O';
            gameStatus.innerHTML = 'Player O\'s turn';
        }
        else{
            playerMove = 'X';
            gameStatus.innerHTML = 'Player X\'s turn';
        }

        gameEnd = false;
    }
}