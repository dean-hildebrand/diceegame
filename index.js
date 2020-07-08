var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "./images/dice" + randomNumber1 + ".png"
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"

var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src", randomDiceImage)
image2.setAttribute("src", randomDiceImage2)

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins🤘🏼";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "Player 2 wins 🤘";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!! Try again";
}
