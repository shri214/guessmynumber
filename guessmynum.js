"use strict";
// document.querySelector(".message").textContent = "wrong ans";

let guess_number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = guess_number;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "please choose number";
    document.querySelector("body").style.backgroundColor = "black";
  } else if (guess === guess_number) {
    document.querySelector(".message").textContent = "wow correct 🏆";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = guess_number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > guess_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To high";
      document.querySelector("body").style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < guess_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To low";
      document.querySelector("body").style.backgroundColor = "blue";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
  guess_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
});
