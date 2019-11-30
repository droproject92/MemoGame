//My var
let cards = document.getElementsByClassName("mCard");
let firstCardChecker = [];
let secondCardChecker = [];
let score = 0;
let clickable = true;
let resetGame = document.getElementById("new-game-btn");
let resetOverlay = document.getElementById("new-game-overlay");
let winner = document.getElementById("screen-overlay");
let srcArray = [
  "./img/NASA3.jpg",
  "./img/NASA2.png",
  "./img/NASA1.jpg",
  "./img/NASA4.jpg",
  "./img/NASA7.jpg",
  "./img/NASA6.jpg",
  "./img/NASA1.jpg",
  "./img/NASA2.png",
  "./img/NASA3.jpg",
  "./img/NASA4.jpg",
  "./img/NASA6.jpg",
  "./img/NASA7.jpg"
];
resetGame.addEventListener("click", newGame);
resetOverlay.addEventListener("click", winnerOverlayOff);

//Functions

function cardsClicks() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
  }
}

function flipCard(event) {
  let currentCard = event.target;
  if (clickable) {
    currentCard.classList.remove("back");
    if (firstCardChecker.length === 0) {
      firstCardChecker.push(currentCard);
    } else {
      //2nd click
      if (currentCard.id == firstCardChecker[0].id) {
        return;
      }
      if (
        firstCardChecker[0].style.backgroundImage ==
        currentCard.style.backgroundImage
      ) {
        score++;
        if (score == 6 || score == 7) {
          winnerOverlayOn();
        }
        firstCardChecker = [];
      } else {
        setTimeout(() => {
          currentCard.classList.add("back");
          firstCardChecker[0].classList.add("back");
          firstCardChecker = [];
        }, 1000);
        clickable = false;
        setTimeout(() => (clickable = true), 1000);
      }
    }
  }
}

function randomCards() {
  srcArray.sort(() => Math.random() - 0.5);
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = `url(${srcArray[i]})`;
  }
}

function newGame() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add("back");
  }
  randomCards();
}

function winnerOverlayOn() {
  winner.style.display = "block";
}

function winnerOverlayOff() {
  winner.style.display = "none";
  newGame();
}
// Main
cardsClicks();
