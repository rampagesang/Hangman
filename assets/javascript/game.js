	
var words = ["double-double", "cheeseburger", "hamburger", "frenchfries", "shakes", "animalfries"];
var wrongWords =[];
var randomWordFunc;
var underScore
var userInputKey;
var rightWordTxt = document.getElementById('rightWord'); // <span id="rightGuess"></span>
var wrongWordTxt = document.getElementById('wrongWord'); // <span id="wrongGuess"></span>
var livesTxt = document.getElementById('lives'); // <span id="lives"></span>
var loseTxt = document.getElementById('lose'); //<h1 id="lose"></h1>
var winTxt = document.getElementById('win'); // <h1 id="win"></h1>
var wrongCount = 13;

	
//------------------First Word-------------
//Assign comptuer to generate random number here.
function randomNum() {
	var randNum = Math.floor(Math.random() * words.length);
	return randNum;
}
function randomWord() {
	var randomWord = words[randomNum()];
	var randomWordSplit  = randomWord.split('');
	return randomWordSplit;
}
function makeUnderScore(randWord) {
	var underScoreArr = []
	for(var i = 0; i < randWord.length; i++) {
		var underscore = ["___"];
		underScoreArr.push(underscore);
	}
	rightWordTxt.textContent = underScoreArr;
	return underScoreArr;
}

function checkRightWord(underScore) {
for(var i =0, x = 1;i <randomWordFunc.length; i++, x++) {
		if(userInputKey === randomWordFunc[i]) {
			underScore.fill(userInputKey,i,x);
			rightWordTxt.textContent = underScore;
		}
	}
}

function wrongWord() {
	wrongWords.push(userInputKey);
	wrongWordTxt.textContent = wrongWords;
	wrongCount --;
	livesTxt.textContent = wrongCount;	
}

function checkWord() {
	if(randomWordFunc.indexOf(userInputKey) > -1) {
		checkRightWord(underScore);
		winGameOver();
	}
	else {
		wrongWord();
		loseGameOver();
	}
}

function loseGameOver() {
	if(wrongCount === 0) {
		 alert("YOU LOSE!");
	}
}

function winGameOver() {
	if(randomWordFunc.join() === underScore.join()) {
		alert("WINNER!");
		reset();
		start();
	}
}

function reset() {
	wrongCount = 13;
	livesTxt.textContent = wrongCount;
	randomWord();
	underScore = makeUnderScore();
}

//-----------------Start------------------

function start() {
	document.onkeyup = function() {
		winTxt.textContent = "";
		userInputKey = event.key;
		checkWord();
	}
}
	function myFunction() {
    	location.reload();
}
	randomWordFunc=  randomWord();
		underScore = makeUnderScore(randomWordFunc);
		start();
