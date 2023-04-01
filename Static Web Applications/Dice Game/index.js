var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage1);
document.querySelector(".img2").setAttribute("src",randomDiceImage2);

var edit = document.querySelector("h1")

if (randomNumber1 < randomNumber2) {
  edit.innerHTML = "PLAYER 2 WINS!!!!!"
}
else if (randomNumber1 > randomNumber2) {
  edit.innerHTML = "PLAYER 1 WINS!!!!!"
}
else {
  edit.innerHTML = "IT'S A DRAW!"
}
