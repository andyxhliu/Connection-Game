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
  blocksArray[0].setAttribute("id", "initRed");
  addEventListener();
}

function addEventListener() {
  initRed.addEventListener("mousedown", function() {
    this.className = "block red";
    blocksArray.forEach(function(block, i) {
      block.addEventListener("mouseover", function() {
        if(event.buttons === 1 && (blocksArray[i-1].className === "block red"||blocksArray[i-6].className === "block red" ||blocksArray[i+1].className === "block red" || blocksArray[i+6].className === "block red")) {
          this.className = "block red";
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
    if (counter===(blocksArray.length)) {
      console.log("You win!");
    }
  }
}

/*Above is for win condition completed*/



























