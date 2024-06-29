/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = ["&spades;", "&hearts;", "&clubs;", "&diams;"];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let randomNumber = getRandomElement(numbers);
  let randomSuit = getRandomElement(suits);

  let number = document.getElementById("number");
  number.innerHTML = randomNumber;
  let suit = document.getElementsByClassName("suit");
  suit[0].innerHTML = randomSuit;
  suit[1].innerHTML = randomSuit;

  if (randomSuit == "&hearts;" || randomSuit == "&diams;") {
    suit[0].style.color = "red";
    suit[1].style.color = "red";
  }
};
