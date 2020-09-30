//Challenge 1

function ageInDays() {
  var birthYear = prompt("What year were you born? ");
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//challenge 2 - generate cats
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-gen-cat");
  image.src = "http://placekitten.com/200/300";
  div.append(image);
}

//challenge3 - rps game

function rpsGame(yourChoice) {
  var humanChoice, botChoice;

  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log(botChoice);
  var results = decideWinner(humanChoice, botChoice);
  console.log(results);
  var message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["scissor", "paper", "rock"][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { scissor: 0, rocks: 1, paper: 0.5 },
    scissor: { scissor: 0.5, rock: 0, paper: 1 },
  };

  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "you lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You won", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src=' " +
    imagesDatabase[humanImageChoice] +
    "'  height='150px' width='150' style='box-shadow: 0px 10px 50px rgba(37,50,233,0.7);'/>";

  botDiv.innerHTML =
    "<img src=' " +
    imagesDatabase[botImageChoice] +
    "'  height='150px' width='150'style='box-shadow: 0px 10px 50px rgba(243,38,24,0.7);'/>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage.color +
    "; font-size: 60px; padding: 30px; ' >" +
    finalMessage.message +
    " </h1>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//challenge 4: change the color of all buttons

var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = Array.from(all_buttons);
function buttonColorChange(buttonthingy) {
  if (buttonthingy.value === "red") {
    buttonsRed();
  } else if (buttonthingy.value === "green") {
    buttonsGreen();
  } else if (buttonthingy.value === "reset") {
    buttonColorReset();
  } else if (buttonthingy.value === "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  var choices = ["btn-primary", "btn-success", "btn-warning", "btn-danger"];

  for (let i = 0; i < all_buttons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

//challenge 5: BlackJack application

let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpam: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("static/sounds/swish.m4a");

document
  .getElementById("blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackHit() {
  showCard(YOU);
}

function showCard(activePlayer) {
  let cardImage = document.createElement("img");
  cardImage.src = "static/images/Q.png";
  document.querySelector(activePlayer["div"]).appendChild(cardImage);
  hitSound.play();
}

function blackjackDeal() {
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  console.log(yourImages);
}
