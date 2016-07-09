document.body.onload = addContainer;

setTimeout(function() {
  console.log("Timeout function called");
}, 2000);

var time=15;
var timerId=setInterval(function() {
  time--;
  addTimerDisplay();
  if (time===0) {
    clearInterval(timerId);
  }
}, 1000);

var container = document.createElement('div');
var resetButton = document.createElement('div');
var helpButton = document.createElement('div');
var helpScreen = document.createElement('div');
var blocks=document.createElement('div');
var backButton = document.createElement('div');
var timerDisplay = document.createElement('div');
var blocksArray=[];
var block;
var j;
var color;


function addTimerDisplay() {
  timerDisplay.setAttribute("class", "timerDisplay");
  document.body.insertBefore(timerDisplay,container);
  timerDisplay.innerHTML=time;
}


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
  blocksArray[0].setAttribute("class", "starter");
  blocksArray[24].setAttribute("id", "endRed");
  blocksArray[24].setAttribute("class", "starter");

  blocksArray[8].setAttribute("id", "initBlue");
  blocksArray[8].setAttribute("class", "starter");
  blocksArray[15].setAttribute("id", "endBlue");
  blocksArray[15].setAttribute("class", "starter");

  blocksArray[14].setAttribute("id", "initGreen");
  blocksArray[14].setAttribute("class", "starter");
  blocksArray[35].setAttribute("id", "endGreen");
  blocksArray[35].setAttribute("class", "starter");

  blocksArray[30].setAttribute("id", "initPurple");
  blocksArray[30].setAttribute("class", "starter");
  blocksArray[28].setAttribute("id", "endPurple");
  blocksArray[28].setAttribute("class", "starter");

  blocksArray[10].setAttribute("id", "initYellow");
  blocksArray[10].setAttribute("class", "starter");
  blocksArray[26].setAttribute("id", "endYellow");
  blocksArray[26].setAttribute("class", "starter");

  blocksArray[20].setAttribute("id", "initAqua");
  blocksArray[20].setAttribute("class", "starter");
  blocksArray[25].setAttribute("id", "endAqua");
  blocksArray[25].setAttribute("class", "starter");
  addEventListenerMouseDown(initRed);
  addEventListenerMouseDown(initBlue);
  addEventListenerMouseDown(initGreen);
  addEventListenerMouseDown(initPurple);
  addEventListenerMouseDown(initYellow);
  addEventListenerMouseDown(initAqua);
}

// function blocksStarter(positionInit, init, positionEnd, end) {
//   this.positionInit=positionInit;
//   this.init=init;
//   this.positionEnd=positionEnd;
//   this.end=end;
// }

// blocksStarter.prototype.setAttri=function() {
//   blocksArray[positionInit].setAttribute("id", init);
//   blocksArray[positionInit].setAttribute("class", "starter");
//   blocksArray[positionEnd].setAttribute("id", end);
//   blocksArray[positionEnd].setAttribute("class", "starter");
//   addEventListenerMouseDown(initRed);
//   addEventListenerMouseDown(initBlue);
//   addEventListenerMouseDown(initGreen);
// }

// var red= new blocksStarter(0,"initRed",24, "endRed");
// var blue= new blocksStarter(8,"initBlue", 15, "endBlue");
// var green= new blocksStarter(14,"initgreen", 35, "endGreen");

function addEventListenerMouseDown(init) {
  init.addEventListener("mousedown", function() {
    color = this.id.replace("init", "").toLowerCase();
    this.className = "block"+" "+ color;
  });
  addEventListenerMouseOver();
}

function addEventListenerMouseOver() {
  blocksArray.forEach(function(block, i) {
    block.addEventListener("mouseover", function() {
      if(event.buttons === 1 &&
        this.className!=="starter" &&
        this.className==="block" &&
        (blocksArray[i-1] && blocksArray[i-1].className === "block"+" "+ color ||
          blocksArray[i-6] && blocksArray[i-6].className === "block"+" "+ color ||
          blocksArray[i+1].className === "block"+" "+ color ||
          blocksArray[i+6].className === "block"+" "+ color)
        ) {
        this.className = "block"+" "+ color;
        checkWin();
      }
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
  backButton.setAttribute("class", "backButton");
  helpScreen.setAttribute("class", "helpScreen");
  document.getElementsByClassName("container")[0].appendChild(helpScreen);
  helpScreen.innerHTML="Connect the blocks with the same color, without interfer with other colors and fill all the blocks!";
  document.getElementsByClassName("helpScreen")[0].appendChild(backButton);
  backButton.innerHTML="Go back";
  allowBackToListen();
}

function allowBackToListen() {
  backButton.addEventListener("click", function() {
  backButton.setAttribute("class", "blank");
  helpScreen.setAttribute("class", "blank");
  helpScreen.innerHTML="";
  console.log("clear it");
  }) 
}

















