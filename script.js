"use strict";

let randomFinalNo = Math.floor(Math.random() * 20 + 1);
const btnCheck = document.querySelector(".btn-check");
const btnAgain = document.querySelector(".btn-again");
const message = document.querySelector(".guessing-label");
const body = document.querySelector("body");
const number = document.querySelector(".number");
let score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const inputNo = document.querySelector(".input-number");

btnCheck.addEventListener("click", function () {
  if (Number(inputNo.value) === randomFinalNo) {
    message.textContent = `🎉 Correct Number!`;
    body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    number.textContent = Number(inputNo.value);
    if (Number(score.textContent) > Number(highscore.textContent))
      highscore.textContent = score.textContent;
  } else if (Number(score.textContent) === 1) {
    message.textContent = `🔥 You lost the game!`;
    score.textContent -= 1;
    btnCheck.disabled = true;
  } else if (Number(inputNo.value) < randomFinalNo) {
    message.textContent = `📉 Too low!`;
    score.textContent -= 1;
  } else if (Number(inputNo.value) > randomFinalNo) {
    message.textContent = `📈 Too high!`;
    score.textContent -= 1;
  }
});

btnAgain.addEventListener("click", function () {
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  score.textContent = 20;
  message.textContent = "Start guessing...";
  inputNo.value = "";
  btnCheck.disabled = false;
  randomFinalNo = Math.floor(Math.random() * 20 + 1);
});
