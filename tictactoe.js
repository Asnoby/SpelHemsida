"use strict";

let vemStart;
let started = false;
let hoverBild = document.createElement("img");
let vemTur;
let isHovering = false;
let canHover = true;
let redDrag = 0;
let blueDrag = 0;
let tempHand;
let tempRuta;

let startKnapp = document.querySelector("#StartKnapp");

let rutor = document.querySelectorAll(".rutor");

let ruta1 = document.querySelector("#nr1");
ruta1.style.gridColumn = "1";
ruta1.style.gridRow = "1";

let ruta2 = document.querySelector("#nr2");
ruta2.style.gridColumn = "2";
ruta2.style.gridRow = "1";

let ruta3 = document.querySelector("#nr3");
ruta3.style.gridColumn = "3";
ruta3.style.gridRow = "1";

let ruta4 = document.querySelector("#nr4");
ruta4.style.gridColumn = "1";
ruta4.style.gridRow = "2";

let ruta5 = document.querySelector("#nr5");
ruta5.style.gridColumn = "2";
ruta5.style.gridRow = "2";

let ruta6 = document.querySelector("#nr6");
ruta6.style.gridColumn = "3";
ruta6.style.gridRow = "2";

let ruta7 = document.querySelector("#nr7");
ruta7.style.gridColumn = "1";
ruta7.style.gridRow = "3";

let ruta8 = document.querySelector("#nr8");
ruta8.style.gridColumn = "2";
ruta8.style.gridRow = "3";

let ruta9 = document.querySelector("#nr9");
ruta9.style.gridColumn = "3";
ruta9.style.gridRow = "3";

let turText = document.querySelector("#turText");

let UIX1 = document.querySelector("#UIX1");
let UIX2 = document.querySelector("#UIX2");
let UIX3 = document.querySelector("#UIX3");

let UIO1 = document.querySelector("#UIO1");
let UIO2 = document.querySelector("#UIO2");
let UIO3 = document.querySelector("#UIO3");

let X1 = document.createElement("img");
X1.src = "Bilder/X.png";
X1.style.height = "100%";
X1.style.width = "100%";
let X2 = document.createElement("img");
X2.src = "Bilder/X.png";
X2.style.height = "100%";
X2.style.width = "100%";
let X3 = document.createElement("img");
X3.src = "Bilder/X.png";
X3.style.height = "100%";
X3.style.width = "100%";

let O1 = document.createElement("img");
O1.src = "Bilder/O.png";
O1.style.height = "100%";
O1.style.width = "100%";
let O2 = document.createElement("img");
O2.src = "Bilder/O.png";
O2.style.height = "100%";
O2.style.width = "100%";
let O3 = document.createElement("img");
O3.src = "Bilder/O.png";
O3.style.height = "100%";
O3.style.width = "100%";

startKnapp.addEventListener("click", Start);

ruta1.addEventListener("mouseover", Hovering);
ruta2.addEventListener("mouseover", Hovering);
ruta3.addEventListener("mouseover", Hovering);
ruta4.addEventListener("mouseover", Hovering);
ruta5.addEventListener("mouseover", Hovering);
ruta6.addEventListener("mouseover", Hovering);
ruta7.addEventListener("mouseover", Hovering);
ruta8.addEventListener("mouseover", Hovering);
ruta9.addEventListener("mouseover", Hovering);

ruta1.addEventListener("mouseout", NotHovering);
ruta2.addEventListener("mouseout", NotHovering);
ruta3.addEventListener("mouseout", NotHovering);
ruta4.addEventListener("mouseout", NotHovering);
ruta5.addEventListener("mouseout", NotHovering);
ruta6.addEventListener("mouseout", NotHovering);
ruta7.addEventListener("mouseout", NotHovering);
ruta8.addEventListener("mouseout", NotHovering);
ruta9.addEventListener("mouseout", NotHovering);

ruta1.addEventListener("click", Placed);
ruta2.addEventListener("click", Placed);
ruta3.addEventListener("click", Placed);
ruta4.addEventListener("click", Placed);
ruta5.addEventListener("click", Placed);
ruta6.addEventListener("click", Placed);
ruta7.addEventListener("click", Placed);
ruta8.addEventListener("click", Placed);
ruta9.addEventListener("click", Placed);

hoverBild.style.width = "100%";
hoverBild.style.height = "100%";

function Start(event) {
  startKnapp.style.visibility = "hidden";
  rutor.forEach(div => {
      div.style.opacity = "0";
  });

  redDrag = 0;
  blueDrag = 0;

  UIO1.style.opacity = "1";
  UIO2.style.opacity = "1";
  UIO3.style.opacity = "1";
  UIX1.style.opacity = "1";
  UIX2.style.opacity = "1";
  UIX3.style.opacity = "1";

  X1.remove();
  X2.remove();
  X3.remove();
  O1.remove();
  O2.remove();
  O3.remove();

  ruta1.id = "nr1";
  ruta2.id = "nr2";
  ruta3.id = "nr3";
  ruta4.id = "nr4";
  ruta5.id = "nr5";
  ruta6.id = "nr6";
  ruta7.id = "nr7";
  ruta8.id = "nr8";
  ruta9.id = "nr9";

  vemStart = Math.random() < 0.5;
  started = true;
  canHover = true;
  if (vemStart == true) {
    RedTurn();
  } else {
    BlueTurn();
  }
}

function RedTurn() {
  if (started == true){
  hoverBild.src = "Bilder/XHover.png";
  vemTur = "red";
  redDrag += 1;
  turText.innerHTML = "Reds turn";
  turText.style.color = "red";
  }
}

function BlueTurn() {
    if(started == true){
  hoverBild.src = "Bilder/OHover.png";
  vemTur = "blue";
  blueDrag += 1;
  turText.innerHTML = "Blues turn";
  turText.style.color = "blue";
    }
}

function Hovering(event) {
  if (started == true && isHovering == false && canHover == true && this.childElementCount <= 1 && 
    this.id != "nr1O" &&
    this.id != "nr2O" &&
    this.id != "nr3O" &&
    this.id != "nr4O" &&
    this.id != "nr5O" &&
    this.id != "nr6O" &&
    this.id != "nr7O" &&
    this.id != "nr8O" &&
    this.id != "nr9O" &&
    this.id != "nr1X" &&
    this.id != "nr2X" &&
    this.id != "nr3X" &&
    this.id != "nr4X" &&
    this.id != "nr5X" &&
    this.id != "nr6X" &&
    this.id != "nr7X" &&
    this.id != "nr8X" &&
    this.id != "nr9X") {
    this.appendChild(hoverBild);
    this.style.opacity = "1";
    isHovering = true;
  }
}

function NotHovering(event) {
  if (
    started == true && canHover == true &&
    this.id != "nr1O" &&
    this.id != "nr2O" &&
    this.id != "nr3O" &&
    this.id != "nr4O" &&
    this.id != "nr5O" &&
    this.id != "nr6O" &&
    this.id != "nr7O" &&
    this.id != "nr8O" &&
    this.id != "nr9O" &&
    this.id != "nr1X" &&
    this.id != "nr2X" &&
    this.id != "nr3X" &&
    this.id != "nr4X" &&
    this.id != "nr5X" &&
    this.id != "nr6X" &&
    this.id != "nr7X" &&
    this.id != "nr8X" &&
    this.id != "nr9X"
  ) {
    isHovering = false;
    this.style.opacity = "0";
  }
}

function Placed(event) {
    if (started == true) {
    if (
      redDrag > 3 && vemTur == "red" && this.id == "nr1X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr2X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr3X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr4X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr5X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr6X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr7X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr8X" ||
      redDrag > 3 && vemTur == "red" && this.id == "nr9X"
    ) {
      tempHand = this.children[0];
      tempRuta = this;
      canHover = true;
    }

    if (
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr1O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr2O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr3O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr4O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr5O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr6O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr7O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr8O") ||
      (blueDrag > 3 && vemTur == "blue" && this.id == "nr9O")
    ) {
      tempHand = this.children[0];
      tempRuta = this;
      canHover = true;
    }
    }   
  if (
    started == true && canHover == true &&
    this.id != "nr1O" &&
    this.id != "nr2O" &&
    this.id != "nr3O" &&
    this.id != "nr4O" &&
    this.id != "nr5O" &&
    this.id != "nr6O" &&
    this.id != "nr7O" &&
    this.id != "nr8O" &&
    this.id != "nr9O" &&
    this.id != "nr1X" &&
    this.id != "nr2X" &&
    this.id != "nr3X" &&
    this.id != "nr4X" &&
    this.id != "nr5X" &&
    this.id != "nr6X" &&
    this.id != "nr7X" &&
    this.id != "nr8X" &&
    this.id != "nr9X")
     {
    this.removeChild(hoverBild);
    if (vemTur == "red") {
      if (redDrag == 1) {
        this.appendChild(X1);
        UIX1.style.opacity = "0";
      } else if (redDrag == 2) {
        this.appendChild(X2);
        UIX2.style.opacity = "0";
      } else if (redDrag == 3) {
        this.appendChild(X3);
        UIX3.style.opacity = "0";
      } else {
          this.appendChild(tempHand);
          tempRuta.style.opacity = "0";
          tempRuta.id = tempRuta.id.slice (0, -1)
      }
      this.style.opacity = "1";
      this.id = this.id + "X";
      CheckRedWin();
      BlueTurn();
    }
    else if (vemTur == "blue") {
      if (blueDrag == 1) {
        this.appendChild(O1);
        UIO1.style.opacity = "0";
      } else if (blueDrag == 2) {
        this.appendChild(O2);
        UIO2.style.opacity = "0";
      } else if (blueDrag == 3) {
        this.appendChild(O3);
        UIO3.style.opacity = "0";
      } else {
        this.appendChild(tempHand);
        tempRuta.style.opacity = "0";
        tempRuta.id = tempRuta.id.slice(0, -1);
      }
      this.style.opacity = "1";
      this.id = this.id + "O";
      CheckBlueWin();
      RedTurn();
    }
    if ((blueDrag >= 4 && redDrag >= 3) || (blueDrag >= 3 && redDrag >= 4)) {
      canHover = false;
    }
    isHovering = false;
  }
}

function CheckRedWin() {
    console.log(ruta1.id + ruta2.id + ruta3.id);
    if (
      ruta1.id == "nr1X" && ruta2.id == "nr2X" && ruta3.id == "nr3X" ||
      ruta4.id == "nr4X" && ruta5.id == "nr5X" && ruta6.id == "nr6X" ||
      ruta7.id == "nr7X" && ruta8.id == "nr8X" && ruta9.id == "nr9X" ||
      ruta1.id == "nr1X" && ruta4.id == "nr4X" && ruta7.id == "nr7X" ||
      ruta2.id == "nr2X" && ruta5.id == "nr5X" && ruta8.id == "nr8X" ||
      ruta3.id == "nr3X" && ruta6.id == "nr6X" && ruta9.id == "nr9X" ||
      ruta1.id == "nr1X" && ruta5.id == "nr5X" && ruta9.id == "nr9X" ||
      ruta3.id == "nr3X" && ruta5.id == "nr5X" && ruta7.id == "nr7X"
    ) {
      started = false;
      turText.innerHTML = "Red won!";
      PlayAgain();
    }
}

function CheckBlueWin() {
    console.log("Kollade blå vinst");
  if (
    ruta1.id == "nr1O" && ruta2.id == "nr2O" && ruta3.id == "nr3O" ||
    ruta4.id == "nr4O" && ruta5.id == "nr5O" && ruta6.id == "nr6O" ||
    ruta7.id == "nr7O" && ruta8.id == "nr8O" && ruta9.id == "nr9O" ||
    ruta1.id == "nr1O" && ruta4.id == "nr4O" && ruta7.id == "nr7O" ||
    ruta2.id == "nr2O" && ruta5.id == "nr5O" && ruta8.id == "nr8O" ||
    ruta3.id == "nr3O" && ruta6.id == "nr6O" && ruta9.id == "nr9O" ||
    ruta1.id == "nr1O" && ruta5.id == "nr5O" && ruta9.id == "nr9O" ||
    ruta3.id == "nr3O" && ruta5.id == "nr5O" && ruta7.id == "nr7O"
  ) {
      started = false;
      turText.innerHTML = "Blue won!";
      PlayAgain();
  }
}

function PlayAgain(){
    startKnapp.style.visibility = "initial";

}
