var userChoice = 0;

window.onload = function(){

    document.getElementById("myBtn").onclick = function(){
    
    document.getElementById("demo").innerHTML = "What the heck!";
    };

    document.getElementById("myBtn2").onclick = function(){
    
    document.getElementById("demo").innerHTML = " ";
    };

    document.getElementById('Rock').onclick =  function(){
        userChoice = "rock";
        compare(userChoice,random());

        
    };
    document.getElementById('Paper').onclick =  function(){
        userChoice = "paper";
        console.log(userChoice);
        random();
        compare(userChoice,random());
    };
    document.getElementById('Scissors').onclick =  function(){
        userChoice = "scissors";
        console.log(userChoice);
        random();
        compare(userChoice,random());
    };

    var random = function(){
        var weaponOptions = ["rock", "paper", "scissors"];
        var computerChoice = weaponOptions[Math.floor(Math.random() * (weaponOptions.length))];
        return computerChoice
    };

    var compare = function(val1, val2){

        if(val1 === val2) {
            alert("tie");

        } else if ((val1 === "rock" && val2 === "scissors") || (val1 === "paper" && val2 === "rock") || (val1 === "scissors" && val2 === "paper")) {

                alert("You won!");

        } else if ((val1 === "rock" && val2 === "paper") || (val1 === "paper" && val2 === "scissors") || (val1 === "scissors" && val2 === "rock")) {

                alert("You lose!");
        }


    };

    };