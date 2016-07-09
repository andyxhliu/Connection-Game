document.body.onload = addContainer;

var container = document.createElement('div');
var resetButton = document.createElement('div');
var helpButton = document.createElement('div');
var helpScreen = document.createElement('div');
var blocks=document.createElement('div');
var blocksArray=[];
var block;
var j;

function addContainer() {
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  blocks.setAttribute("class", "blocks");
  document.getElementsByClassName("container")[0].appendChild(blocks);
  addResetButton();
  addBlocksToListen();
  addHelpButton();
}

function addBlocksToListen() {
  var blockNumber = 36;
  for (var i=0; i<36; i++) {
    block = document.createElement('div');
    block.setAttribute("class", "block");
    document.getElementsByClassName("blocks")[0].appendChild(block);
    blocksArray.push(block);
  }
  blocksStarter();
}

function blocksStarter() {
  blocksArray[0].setAttribute("id", "initRed");
  blocksArray[24].setAttribute("id", "endRed");
  blocksArray[8].setAttribute("id", "initBlue");
  blocksArray[15].setAttribute("id", "endBlue");
  blocksArray[14].setAttribute("id", "initGreen");
  blocksArray[35].setAttribute("id", "endGreen");
  addEventListener(initRed, "endRed", "red", "initBlue", "endBlue", "initGreen", "endGreen");
  addEventListener(initBlue, "endBlue", "blue", "initRed", "initRed", "initGreen", "endGreen");
  addEventListener(initGreen, "endGreen", "green", "initRed", "initRed", "initBlue", "endBlue");
}

function addEventListener(init,end, Color, OtherColorAI, OtherColorAE, OtherColorBI, OtherColorBE) {
  init.addEventListener("mousedown", function() {
    this.className = "block"+" "+ Color;
    blocksArray.forEach(function(block, i) {
      block.addEventListener("mouseover", function() {
        if(event.buttons === 1 && this.id!==OtherColorAI && this.id!==OtherColorAE && this.id!==OtherColorBI && this.id!==OtherColorBE && this.className==="block" && (blocksArray[i-1].className === "block"+" "+ Color||blocksArray[i-6].className === "block"+" "+ Color ||blocksArray[i+1].className === "block"+" "+ Color || blocksArray[i+6].className === "block"+" "+ Color)) {
          this.className = "block"+" "+ Color;
          if (this.id===end) {
            console.log("You found it");
            /*How to disable the event listener? So user won't go pass it?*/
          }
          checkWin();
        // } else if (event.buttons===0) {
        //   blocksArray.forEach(function(block,i) {
        //     var toBeCleared = document.getElementsByClassName("block"+" "+ Color);
        //     toBeCleared.className="block";
        //   })  
          /*How to istinguish whether or not mouse ip Yet?*/
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
    if (counter===(blocksArray.length-4)) {
      console.log("You win!");
    }
  }
}

function addResetButton() {
  resetButton.setAttribute("class", "reset");
  resetButton.innerHTML="Wipe";
  document.body.appendChild(resetButton);
  resetButtonToListen();
}

function resetButtonToListen() {
  resetButton.addEventListener("click", function() {
    blocksArray.forEach(function(block,i) {
      block.className="block";
    })
  })
}

function addHelpButton() {
  helpButton.setAttribute("class", "help");
  helpButton.innerHTML="Help";
  document.body.appendChild(helpButton);
  helpButton.addEventListener("click", function() {
    help();
  })
}

function help() {
  helpScreen.setAttribute("class", "helpScreen");
  document.getElementsByClassName("container")[0].appendChild(helpScreen);
  helpScreen.innerHTML="Connect the blocks with the same color, without interfer with other colors and fill all the blocks!";
}

/*Try to add the help button and pop up screen*/













