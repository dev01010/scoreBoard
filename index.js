let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let heading = document.getElementById("heading");

let homeTotal = 0;
let guestTotal = 0;

const addOne = () => {
  homeTotal += 1;
  homeScore.innerHTML = homeTotal;
};
const addTwo = () => {
  homeTotal += 2;
  homeScore.innerHTML = homeTotal;
};
const addThree = () => {
  homeTotal += 3;
  homeScore.innerHTML = homeTotal;
};

const add1 = () => {
  guestTotal += 1;
  guestScore.innerHTML = guestTotal;
};
const add2 = () => {
  guestTotal += 2;
  guestScore.innerHTML = guestTotal;
};
const add3 = () => {
  guestTotal += 3;
  guestScore.innerHTML = guestTotal;
};
