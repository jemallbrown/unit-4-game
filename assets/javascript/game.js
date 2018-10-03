// This is the document ready block

$( document ).ready(function() {
    console.log( "ready!" );
});


//initialize values at when page is loaded
var playerTotal = 0;
var losses = 0;
var wins = 0;
var min = 19
var max = 120

//You will be given a random number at the start of the game (between 19 and 120).
// return Math.floor(Math.random() * (max - min + 1) ) + min;


var randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

// document.getElementById("displayRandom").innerHTML = (randomNumber);
$("#displayRandom").html(randomNumber);

console.log("The current Random number is " + randomNumber);

//There are four crystals below.  By clicking on a crystal you will add a specific amount of points to your total score. (number between 1 and 12). 
// diamond value
var diamondNumber = Math.floor(Math.random() * 12) +1;

console.log("The current diamond number is " + diamondNumber);

// blue jewel value
var blueNumber = Math.floor(Math.random() * 12) +1;

console.log("The current blue number is " + blueNumber);

// purple jewel value
var purpleNumber = Math.floor(Math.random() * 12) +1;

console.log("The current purple number is " + purpleNumber);

// green jewel value
var greenNumber = Math.floor(Math.random() * 12) +1;

console.log("The current green number is " + greenNumber);

//You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.
var resetNumbers = function (){
        randomNumber = Math.floor(Math.random() * 102) + 19;
        document.getElementById("displayRandom").innerHTML = (randomNumber);
        diamondNumber = Math.floor(Math.random() * 12) +1;
        blueNumber = Math.floor(Math.random() * 12) +1;
        purpleNumber = Math.floor(Math.random() * 12) +1;
        greenNumber = Math.floor(Math.random() * 12) +1;
}
function gamePlay(){
        console.log("entered gamePlay function")
        if (playerTotal > randomNumber) {
                // alert ("you lose!")
                playerTotal = 0;
                losses = losses + 1
                document.getElementById("displayLosses").innerHTML = ("Losses = " + losses);
                resetNumbers();
        }
        
        if (playerTotal == randomNumber){
                // alert ("you won the game!!!");
                playerTotal = 0;
                wins = wins + 1;
                playerTotal = 0;
                document.getElementById("displayWins").innerHTML = ("Wins = " + wins);
                resetNumbers();
                }

        else  {
            document.getElementById("displayScore").innerHTML = playerTotal;
            console.log("in the gamePlay else statement");
            }
}



//The value of each crystal is hidden from you until you click on it.

//Each time when the game starts, the game will change the vaules of each crystal.

//******** Javascript follows below **************//



//listen event for the buttons follows
var diamond = document.getElementById("diamond-btn")

diamond.addEventListener('click' , function(){
    
})

diamond.onclick = function(){
    playerTotal = playerTotal + diamondNumber
    console.log("diamond button pressed")
    console.log("player total is now " + playerTotal)
    gamePlay();
}

var blue = document.getElementById("blue-btn")

blue.addEventListener('click' , function(){
})

blue.onclick = function(){
    playerTotal = playerTotal + blueNumber
    console.log("Blue button pressed")
    console.log("player total is now " + playerTotal)
    gamePlay();
    }

var purple = document.getElementById("purple-btn")
purple.addEventListener('click' , function(){
})

purple.onclick = function(){
    playerTotal = playerTotal + purpleNumber
    console.log("Purple button pressed")
    console.log("player total is now " + playerTotal)
    gamePlay();
    }

var green = document.getElementById("green-btn")
green.addEventListener('click' , function(){
})

green.onclick = function(){
    playerTotal = playerTotal + greenNumber
    console.log("Green button pressed")
    console.log("player total is now " + playerTotal)
    gamePlay();
    }