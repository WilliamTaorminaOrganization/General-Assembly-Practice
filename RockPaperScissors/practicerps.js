var userChoice;
var computerChoice;
window.onload = function(){

function compare()
	var weaponOptions = ["rock", " paper", " scissors"];
	var computerChoice = weaponOptions[Math.floor(Math.random() * (weaponOptions.length))];

	// var userConfirm = prompt("Hello. Would you like to play a game? (y,n)");
	// console.log(userConfirm);


	// if(userConfirm == "y"){
	// 	console.log("The user has chosen to play the game. The program will now also choose a weapon randomly");
	// } else if(userConfirm === null){
	// 	console.log("The user did not input any anwer.");
	// }
	// 	else
	// {
	// 	console.log("This input is not valid. Check for errors in spelling.");
	// }

	document.getElementById('Rock').onclick = function(){
		userChoice = "rock";
		computerSelection();
		compare(userChoice,computerChoice);
	};
	document.getElementById('Paper').onclick = function(){
		userChoice = "paper";
		computerSelection();
		compare(userChoice, computerChoice);
	};
	document.getElementById('Scissors').onclick = function(){
		userChoice = "scissors";
		computerSelection();
		compare(userChoice,computerChoice);
	};
	
	// var userChoice = prompt("Choose: Rock, Paper, Scissors");
	
	console.log("The user has chosen " + userChoice);


	function computerSelection(){
		computerChoice = Math.random();
		console.log("The random number selection is " + computerChoice);

		if (computerChoice > 0 && computerChoice < 0.33){
			computerChoice = "rock";
		}
		else if(computerChoice >= 0.33 && computerChoice < 0.66) {
			computerChoice = "paper";
		}
		else {
			computerChoice = "scissors";
		}
	}

	console.log("The computer has chosen " + computerChoice);

	function compare(){
		if(userChoice === computerChoice){
			console.log("We have a tie!");
			confirm("We have a tie!");
		}

		else if(userChoice === "rock"){
			if(computerChoice === "paper"){
				confirm("Sorry, you chose " + userChoice + ", but the computer chose " + computerChoice + ", and according to the official rules, " + computerChoice + " beats " + userChoice + ". You lose.");
			} else {
				confirm("Nice! The computer chose " + computerChoice + ", and you chose " + userChoice + ". According to the official rules, you win!");
			}
		}
		else if(userChoice === "paper"){
			if(computerChoice === "scissors"){
				confirm("Sorry, you chose " + userChoice + ", but the computer chose " + computerChoice + ", and according to the official rules, " + computerChoice + " beats " + userChoice + ". You lose.");
			}else{
				confirm("Nice! The computer chose " + computerChoice + ", and you chose " + userChoice + ". According to the official rules, you win!");
			}
		}
		else if(userChoice === "scissors"){
			if(computerChoice === "rock"){
				confirm("Sorry, you chose " + userChoice + ", but the computer chose " + computerChoice + ", and according to the official rules, " + computerChoice + " beats " + userChoice + ". You lose.");
		}	else{
				confirm("Nice! The computer chose " + computerChoice + ", and you chose " + userChoice + ". According to the official rules, you win!");
			}
		}
		else{
			confirm("I don't understand that input. Make sure that you type exactly " + weaponOptions + ".  Refresh the browser and try again. ");
		}
	}
}