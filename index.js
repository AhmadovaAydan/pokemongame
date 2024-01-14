const oyununQaydasi = ["e", "f", "w"];

let player1Point = 0;
let player2Point = 0;

const showPoint1 = document.querySelector("#showPoint1");
const showPoint2 = document.querySelector("#showPoint2");

const showResault1 = document.querySelector("#showResault1");
const showResault2 = document.querySelector("#showResault2");

const showImg1 = document.querySelector("#showImg1");
const showImg2 = document.querySelector("#showImg2");

function randomElement() {
  const randomİndex = Math.floor(Math.random() * oyununQaydasi.length);
  return oyununQaydasi[randomİndex];
}

function resultGAme(u, c) {
  console.log(u);
  console.log(c);
  showImg1.src = `./images/${u}.png`;
  showImg2.src = `./images/${c}.png`;

  if (u == "w" && c == "f") {
    console.log("WIN");
    player1Point += 1;

    showPoint1.innerHTML = player1Point;

    showResault1.innerHTML = "WIN";
    showResault2.innerHTML = "LOSE";

    showResault1.style.color = "green";
    showResault2.style.color = "red";

    // showResault1.classList.add("text-success");
    // showResault2.classList.add("text-danger");
  } else if (u == "f" && c == "e") {
    console.log("WIN");
    player1Point += 1;

    showPoint1.innerHTML = player1Point;

    showResault1.innerHTML = "WIN";
    showResault2.innerHTML = "LOSE";

    showResault1.style.color = "green";
    showResault2.style.color = "red";
    // showResault1.classList.add("text-success");
    // showResault2.classList.add("text-danger");
  } else if (u == "e" && c == "w") {
    console.log("WIN");
    player1Point += 1;

    showPoint1.innerHTML = player1Point;

    showResault1.innerHTML = "WIN";
    showResault2.innerHTML = "LOSE";

    showResault1.style.color = "green";
    showResault2.style.color = "red";
    // showResault1.classList.add("text-success");
    // showResault2.classList.add("text-danger");
  } else if (u == c) {
    console.log("DRAW");
    showResault1.innerHTML = "DRAW";
    showResault2.innerHTML = "DRAW";

    showResault1.style.color = "grey";
    showResault2.style.color = "grey";
    // showResault1.classList.add("text-warning");
    // showResault2.classList.add("text-warning");
  } else {
    console.log("LOSE");
    player2Point += 1;

    showPoint2.innerHTML = player2Point;
    showResault2.innerHTML = "WIN";

    showResault1.innerHTML = "LOSE";

    showResault1.style.color = "red";
    showResault2.style.color = "green";
    // showResault2.classList.add("text-success");
    // showResault1.classList.add("text-danger");
  }
}

window.addEventListener("keypress", function (e) {
  console.log("click", e.key);
  const userChoose = e.key;

  if (oyununQaydasi.indexOf(userChoose) != -1) {
    const compChoose = randomElement();

    resultGAme(userChoose, compChoose);
  } else {
    this.alert("Duzgun herf sec: bunlar olmalidir:e f w");
  }
});
