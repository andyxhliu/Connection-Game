
document.body.onload = addContainer;

var container = document.createElement('div');
var blocksArray=[];
var block;
var j;

function addContainer() {
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  addBlocksToListen();
}

function addBlocksToListen() {
  var blockNumber = 36;
  for (var i=0; i<36; i++) {
    block = document.createElement('div');
    block.setAttribute("class", "block");
    container.appendChild(block);
    blocksArray.push(block);
  }
  blocksStarter();
}

function blocksStarter() {
  blocksArray[7].setAttribute("id", "initRed");
  blocksArray[35].setAttribute("id", "endRed");
  blocksArray[22].setAttribute("id", "initBlue");
  addEventListener();
}

function addEventListener() {
  initRed.addEventListener("mousedown", function() {
    this.className = "block red";
    blocksArray.forEach(function(block, i) {
      block.addEventListener("mouseover", function() {
        if(event.buttons === 1 && this.id!=="initBlue" && this.className==="block" && (blocksArray[i-1].className === "block red"||blocksArray[i-6].className === "block red" ||blocksArray[i+1].className === "block red" || blocksArray[i+6].className === "block red")) {
          this.className = "block red";
          if (this.id==="endRed") {
            console.log("You found it");
          }
          checkWin();
        } 
      });
    });
  });
}

function checkWin() {
  var counter=0;
  for (var j=0; j<blocksArray.length; j++) {
    if(blocksArray[j].className!=="block"){
      counter++;
    }
    if (counter===(blocksArray.length-1)) {
      console.log("You win!");
    }
  }
}

/*Above is to allow define destination and will not cross block with another colors*/


























