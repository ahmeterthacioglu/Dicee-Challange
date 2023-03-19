

function randomDice(img) {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var link = document.querySelector(img).getAttribute("src");
  var firstPart = link.slice(0, 11);
  var secondPart = link.slice(12, link.length);
  var newLink = firstPart + randomNumber + secondPart;
  var link = document.querySelector(img).setAttribute("src", newLink);
  return randomNumber;
}

var player1 = randomDice(".img1");
var player2 = randomDice(".img2");

if (player1 > player2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (player1 < player2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").textContent = "DRAW!";
}
