let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const gues = Number(document.querySelector(".guess").value);
  if (!gues) {
    document.querySelector(".message").textContent = "no number !!";
  } else if (gues === secretNumber) {
    document.querySelector(".message").textContent = "Right guess !!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  } else if (gues > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High !! ";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").style.backgroundColor = "red";
    } else {
      document.querySelector(".message").textContent = "Game Over !!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (gues < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low !! ";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").style.backgroundColor = "orange";
    } else {
      document.querySelector(".message").textContent = "Your Game Is Over !!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start Questioning .....";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.backgroundColor = "white";
});
