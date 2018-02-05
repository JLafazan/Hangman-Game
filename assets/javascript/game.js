

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  var category=["wine"]         // Topic Array
  var song=["RedRedWine"]
  var winetrivia=["Red goes with steak","Rose goes with chicken", "White goes with chicken"]
  var winetype=["chardonnay","cabernet","voignier","merlot","syrah","zinfandel","reisling","sangiovese","grenache","tempranillo"]


  var Hint ;              // Word Hint
  var word ;              // Selected word
  var userGuess = [ ];     // Geuss
  var badGuessLimit =  10   // Number of Bad Guesses         
  var GeussesMade = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'
  // var computerGuess = [ ];
var wins ;
var gameOver = false
var smallWin = false
var losses ;
var GuessIndex = [ ];
var spacers = ["-"];
var totSpacers = ["-"];
var LetterNum = 0;
var Char = [ ];
var position = 0;
var j = 0;
var i = 0;
var x = 0;


// Start Game by hovering over picture

function playhover() {


// Computer to chose a random winetype 

var computerGuess = winetype[Math.floor(Math.random()*winetype.length)];


// Using the number of letters in computerGuess, print "_" for each letter


for (var j = 0; j < computerGuess.length-1; j++) {

totSpacers.push("-")
}

var html =
          "<p><strong>Your word is: " + totSpacers + "</strong></p>";

document.querySelector("#word2").innerHTML = html;

console.log("badGuessLimit = " + badGuessLimit);

console.log("computerGuess = " + computerGuess);

// Determines which key was pressed.
document.onkeyup = function(event){      
var userGuess = event.key;

var html =
          "<p>You chose: " + userGuess + "</p>";

document.querySelector("#word").innerHTML = html;

//Determine if userGuess is a winner

for (var h = 0; h < computerGuess.length-1; h++) {


   if (userGuess === computerGuess[h]){
    smallWin = true;
   }
else 
  smallWin = false;
}

if (smallWin === false){

  badGuessLimit = badGuessLimit-1;

}

if (badGuessLimit = 0){
  gameOver = true;

}














console.log("userGuess3 = " + userGuess);
console.log("winetypelength = " + winetype.length);
console.log("computerGuess = " + computerGuess);
console.log("computerGuesslength = " + computerGuess.length);
console.log("totSpacers = " + totSpacers);
console.log("smallWin = " + smallWin);
console.log("badGuessLimit = " + badGuessLimit);
console.log("gameOver = " + gameOver);
}
}











