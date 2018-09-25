function game(){

  var fill = [];
  var tries = 0;
  var guesses = [];
  var charSplit = [];
  var win = 0;
  document.getElementById("tries").textContent = tries;
  document.getElementById("win").textContent = win;
  document.getElementById("guess").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("error").textContent = " ";

  var words =["raleigh", "greensboro", "winston", "durham", "charlotte", "concord"];
  var chosen = words[Math.floor(Math.random()*words.length)];
  var word = chosen.toLowerCase();
  var wBlank = document.getElementById("word");


  
function lifeLoop(){
    var e = document.createElement("i");
    e.innerHTML = '<i class="fas fa-heart " id="icon"></i>';
    //e.innerHTML = "sujith";
    document.getElementById("life").appendChild(e);
  }

  for (var i=0; i<13; i++){
    lifeLoop();
  }

  // Inserting blanks corresponding to the number of characters in the 
//word and splitting the characters of the word into array charSplit[].

  for (var i=0; i<word.length; i++){
    fill[i] = " ___   ";
    wBlank.textContent = fill.join("");
    charSplit.push(word.charAt(i));
  }
  
  //Checking if the input key is a alphabet
  function isAlpha(guessKey){
    var letters = (/^[A-Za-z]+$/);
    if(guessKey.match(letters)) {
      document.getElementById("error").textContent = " ";
    } else {
      document.getElementById("error").textContent = "   Please enter an alphabet ";
    }
  }
  
  //When you press a key on your keyboard
  document.onkeyup = function(event){
    //var guess = document.getElementById("guess");
    var guessKey = event.key;
    isAlpha(guessKey);
    //Checking the user input alphabet is inside the word
    for (var i=0; i<word.length; i++){
      if (guessKey == word.charAt(i)){
        fill[i] = guessKey;
        document.getElementById("word").textContent = fill.join("");
        win = parseInt(win) + 1;
        document.getElementById("win").textContent = win;
        
      }
    }
  
    //If the user input alphabet is not in the word
    if (charSplit.indexOf(guessKey) === -1) {
      guesses.push(guessKey);
      document.getElementById("guess").textContent = guesses.join(" ");
      document.getElementById("tries").textContent = guesses.length;
      document.getElementById("icon").remove();
      if (guesses.length == 12){
        document.onkeyup = function () {};
        
        document.getElementById("result").textContent = "  Sorry! You lost!!"
        
      }
      
      
    }
    
  //Result 
    if (word == fill.join("")) {
      document.getElementById("result").textContent = "  Good Job !!!";
    }
  }
}
game();

// function resetGame(){
  
//   chosen = words[Math.floor(Math.random()*words.length)];
//   document.getElementById("guess").textContent = " ";
//   document.getElementById("tries").textContent = 0;
//   document.getElementById("win").textContent = 0;
//   charSplit = [];
//   guesses = [];
//   win=0;
//   game()

// }
document.getElementById("myBtn").addEventListener("click", function(){
  
  
    game();
    document.getElementById("life").innerHTML = "";
    for (var i=0; i<13; i++){
      lifeLoop();
    }



});


/* 
document.onkeyup = function(event){
  var guess = document.getElementById("guess");
  guess.textContent = event.key;
  var word ="malayalam";
  var guessKey = guess.textContent;
  for (var i=0; i<word.length; i++){
    document.write(word.charAt(i));
    document.write(guessKey);
    if (guessKey == word.charAt(i)){
      alert ("hi");
    }else {
      alert ("bye");
    }


  
  }
}



*/