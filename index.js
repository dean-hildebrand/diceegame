var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "./images/dice" + randomNumber1 + ".png"

var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src", randomDiceImage)
image2.setAttribute("src", randomDiceImage)
