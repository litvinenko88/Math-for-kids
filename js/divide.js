"user strict";

const audio = document.querySelector("audio");
const answer1 = document.querySelector(".answer__answer1");
const answer2 = document.querySelector(".answer__answer2");
const answer3 = document.querySelector(".answer__answer3");
let rightAnswer;

function calculationEquationGenerator() {
  let getRandomNumber = Math.floor(Math.random() * 10) + 1;
  let nam1 = getRandomNumber;
  let nam2 = nam1 * getRandomNumber;
  let incorrectAnswer1 = Math.floor(Math.random() * 10);
  let incorrectAnswer2 = Math.floor(Math.random() * 10);
  let number1 = document.querySelector(".equation__num1");
  let number2 = document.querySelector(".equation__num2");
  rightAnswer = nam1 / nam2;

  if (nam1 < nam2) {
    rightAnswer = nam2 / nam1;
  } else {
    rightAnswer = nam1 / nam2;
  }

  let equation1 = nam1 > nam2 ? nam2 : nam1;
  let equation2 = nam2 < nam1 ? nam1 : nam2;

  number1.textContent = equation2;
  number2.textContent = equation1;

  allAnswer = [rightAnswer, incorrectAnswer1, incorrectAnswer2];

  let answerRandom = allAnswer
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  answer1.textContent = answerRandom[0];
  answer2.textContent = answerRandom[1];
  answer3.textContent = answerRandom[2];
}

answer1.addEventListener("click", function () {
  if (answer1.textContent == rightAnswer) {
    calculationEquationGenerator();
  } else {
    audio.play();
  }
});

answer2.addEventListener("click", function () {
  if (answer2.textContent == rightAnswer) {
    calculationEquationGenerator();
  } else {
    audio.play();
  }
});

answer3.addEventListener("click", function () {
  if (answer3.textContent == rightAnswer) {
    calculationEquationGenerator();
  } else {
    audio.play();
  }
});

calculationEquationGenerator();
