"use strict";

let c = document.querySelector("#pongCanvas");
let ctx = c.getContext("2d");

let scoreText = document.querySelector("#score");

let sValuex;
let sValuey;
let over;

let ballx = 150;
let bally = 75;
let mRight = true;
let xSpeed = 2.2;
let ySpeed = 1.5;

let p1y = 10;
let p1L = 30;
let p1Speed = 3;
let p1Poäng = 0;

let p2y = 10;
let p2L = 30;
let p2Speed = 3;
let p2Poäng = 0;

let up1 = false;
let up2 = false;
let down1 = false;
let down2 = false;

let startVanlig = document.querySelector("#startVanlig");

startVanlig.addEventListener("click", initiate);
window.addEventListener("keydown", this.CheckButtonPressed, false);
window.addEventListener("keyup", this.CheckButtonReleased, false);

function initiate(){
    p1Poäng = 0;
    p2Poäng = 0;
    startVanlig.style.visibility = "hidden";
    StartUp1();
  }
  
  function StartUp1() {
    
    scoreText.innerHTML = p1Poäng + " - " + p2Poäng;
    ballx = 150;
    bally = 75;
    
    sValuex = Math.floor(Math.random() * 2) + 1;
    sValuey = Math.floor(Math.random() * 2) + 1;
    if (sValuex == 1) {
      xSpeed = 1.8;
      mRight = true;
    } else {
      xSpeed = -1.8;
      mRight = false;
    }
    
    if (sValuey == 1) {
      ySpeed = 1.5;
    } else {
      ySpeed = -1.5;
    }
    
    over = false;
    
    start1();
  }
  
  function start1() {
  ctx.clearRect(0, 0, 300, 150);
  CheckBallXStuds();
  CheckBallYStuds();
  MoveBall();
  MoveP1();
  MoveP2();
  DrawBall();
  DrawP1();
  DrawP2();
  CheckPoäng();

  if (over == false) {
  window.requestAnimationFrame(start1);
  } else {
      StartUp1();
  }
}

function DrawBall() {
  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.arc(ballx, bally, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

function DrawP1() {
  ctx.beginPath();
  ctx.rect(10, p1y, 5, p1L);
  ctx.fill();
  ctx.stroke();
}

function DrawP2() {
  ctx.beginPath();
  ctx.rect(285, p2y, 5, p2L);
  ctx.fill();
  ctx.stroke();
}

function MoveBall() {
  ballx += xSpeed;
  bally += ySpeed;
}

function MoveP1() {
  if (up1 == true && p1y >= 0) {
    p1y -= p1Speed;
  }
  if (down1 == true && p1y + p1L <= 150) {
    p1y += p1Speed;
  }
}

function MoveP2() {
  if (up2 == true && p2y >= 0) {
    p2y -= p2Speed;
  }
  if (down2 == true && p2y + p2L <= 150) {
    p2y += p2Speed;
  }
}

function CheckBallXStuds() {
  if (
    ballx - 3 <= 15 &&
    ballx + 3 >= 10 &&
    bally >= p1y &&
    bally <= p1y + p1L &&
    mRight == false
  ) {
    if (up1 == true){
      ySpeed -= 0.5;
    } else if (down1 == true) {
      ySpeed += 0.5;
    }
    xSpeed -= 0.1;
    xSpeed *= -1;
    mRight = true;
  } else if (
    ballx - 3 <= 290 &&
    ballx + 3 >= 285 &&
    bally >= p2y &&
    bally <= p2y + p2L &&
    mRight == true
  ) {
    if (up2 == true) {
      ySpeed -= 0.5;
    } else if (down2 == true) {
      ySpeed += 0.5;
    }
    xSpeed += 0.1;
    xSpeed *= -1;
    mRight = false;
  }
}

function CheckPoäng(){
    if (ballx + 3 >= 300) {
        p1Poäng += 1;
        xSpeed = 1.8;
        over = true;
    } else if (ballx - 3 <= 0){
        p2Poäng += 1;
        xSpeed = 1.8;
        over = true;
    }
}

function CheckBallYStuds() {
  if (bally + 3 >= 150 || bally - 3 <= 0) {
    ySpeed *= -1;
  }
}

function CheckButtonPressed(e) {
  e.preventDefault();
  let code = e.keyCode;

  if (code == 87) {
    up1 = true;
  }
  if (code == 83) {
    down1 = true;
  }

  if (code == 38) {
    up2 = true;
  }
  if (code == 40) {
    down2 = true;
  }
}

function CheckButtonReleased(e) {
  let code = e.keyCode;

  if (code == 87) {
    up1 = false;
  }
  if (code == 83) {
    down1 = false;
  }

  if (code == 38) {
    up2 = false;
  }
  if (code == 40) {
    down2 = false;
  }
}
