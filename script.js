function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 126; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble"><p>${rn}</p></div>`;
  }

  document.querySelector(".bottom").innerHTML = clutter;
}
makeBubble();

var timer = 6;
function timerFunc() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerInt);
      // document.querySelector(".bottom").innerHTML = "";
      document.querySelector(
        ".bottom"
      ).innerHTML = `<h2>Game Over & your Score is ${score}</h2>`;
    }
  }, 1000);
}
timerFunc();

var hitRn = 0;
function hitVal() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}
hitVal();

var score = 0;
function scoreInc() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function scoreDec() {
  score -= 10;
  document.querySelector("#score").textContent = score;
}

var num;
document.querySelector(".bottom").addEventListener("click", (e) => {
  num = Number(e.target.textContent);
  if (num === hitRn) {
    scoreInc();
    hitVal();
    makeBubble();
  } else {
    // document.querySelector("#score").textContent = 0;
    scoreDec();
  }
});

document.querySelector("button").addEventListener("click", function () {
  window.location.reload();
});
