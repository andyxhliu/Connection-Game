document.body.onload = addContainer;

setTimeout(function() {
  console.log("Timeout function called");
}, 2000);

var time=20;

function startTiming() {
  var timerId=setInterval(function() {
    time--;
    console.log(time);
    addTimerDisplay();
    if (time===0 || result==="win") {
      result=null;
      clearInterval(timerId);
      if (time===0) {
        // clearInterval(timerId);
        // result=null;
        display.setAttribute("class","display"+" lose");
        buttonNext.setAttribute("class", "buttonNext");
        buttonReplay.setAttribute("class", "buttonReplay"+" win");
        addButtonReplayToListen();
        reset(allColors);
      }
    }
  }, 1000);
}

var container = document.createElement('div');
var resetButton = document.createElement('div');
var helpButton = document.createElement('div');
var helpScreen = document.createElement('div');
var blocks=document.createElement('div');
var backButton = document.createElement('div');
var timerDisplay = document.createElement('div');
var display = document.createElement('div');
var buttonNext = document.createElement('div');
var buttonReplay = document.createElement('div');
var blocksArray=[];
var allColors=["red","blue","green","purple","yellow","aqua"];
var block;
var j;
var color;
var result=null;
var level=0;
var initialPositions=[[0,24,8,15,14,35,30,28,10,26,20,25],
                      [0,19,5,9,4,29,27,35,6,33,25,22],
                      [0,28,10,14,1,17,31,26,30,12,32,15],
                      [1,6,12,7,2,31,25,35,10,14,15,22]];
var initialPlace=[];

function chooseInitialPosition(level) {
  for (var i=0; i<initialPositions[level].length; i++) {
    initialPlace.push(initialPositions[level][i]);
  }
}

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
  chooseInitialPosition(level);
  addResetButton();
  addBlocksToListen();
  addHelpButton();
  addEventListenerMouseUp();
  addDisplay();
  addButtonNext();
  addButtonReplay();
  startTiming();
}

function addButtonReplay() {
  buttonReplay.setAttribute("class", "buttonReplay");
  document.getElementsByClassName("container")[0].appendChild(buttonReplay);
}

function addButtonNext() {
  buttonNext.setAttribute("class", "buttonNext");
  document.getElementsByClassName("container")[0].appendChild(buttonNext);
}

function addDisplay() {
  display.setAttribute("class", "display");
  document.getElementsByClassName("container")[0].appendChild(display);
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
      result="win";
      display.setAttribute("class","display"+" win");
      buttonNext.setAttribute("class", "buttonNext"+" win");
      buttonReplay.setAttribute("class", "buttonReplay"+" win");
      addButtonNextToListen();
      addButtonReplayToListen();
    }
  }
}

function addButtonNextToListen() {
  buttonNext.addEventListener("click", function() {
    console.log("change to second array");
    level++;
  })
}

function addButtonReplayToListen() {
  buttonReplay.addEventListener("click", function() {
    reset(allColors);
    display.setAttribute("class","display");
    buttonNext.setAttribute("class", "buttonNext");
    buttonReplay.setAttribute("class", "buttonReplay");
    console.log("pass reset colors");
    // setTimeout();
    console.log("pass setTimeOut");
    time=20;
    startTiming();
    console.log("pass startTiming");
    // addTimerDisplay();
    // console.log("pass addTimerDispaly");
    /*HOW to reset the timing???????????????????????????????????????????????????*/
  })
}

function addResetButton() {
  resetButton.setAttribute("class", "reset");
  resetButton.innerHTML="Wipe";
  document.body.appendChild(resetButton);
  resetButtonToListen();
}

function resetButtonToListen() {
  resetButton.addEventListener("click", function() {
    reset(allColors);
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
  helpScreen.innerHTML="Connect the blocks with the same color, without interfer with other colors and fill in all the blocks!<br> <br> Tip: You can undo a move by clicking the keys";
  document.getElementsByClassName("helpScreen")[0].appendChild(backButton);
  allowBackToListen();
}

function allowBackToListen() {
  backButton.addEventListener("click", function() {
  backButton.setAttribute("class", "blank");
  helpScreen.setAttribute("class", "blank");
  helpScreen.innerHTML="";
  }) 
}

function addEventListenerMouseUp() {
  blocksArray.forEach(function(block, i) {
    block.addEventListener("mouseup", function() {
      switch(true) {
        case ((this.id!=="endRed")&& (blocksArray[0].className==="block red")):
        reset(["red"]);
        blocksArray[0].className==="starter";
        break;
        case ((this.id!=="endBlue")&& (blocksArray[8].className==="block blue")):
        reset(["blue"]);
        blocksArray[8].className==="starter";
        break;
        case ((this.id!=="endGreen")&&(blocksArray[14].className==="block green")):
        reset(["green"]);
        blocksArray[14].className==="starter";
        break;
        case ((this.id!=="endPurple")&&(blocksArray[30].className==="block purple")):
        reset(["purple"]);
        blocksArray[30].className==="starter";
        break;
        case ((this.id!=="endYellow")&&(blocksArray[10].className==="block yellow")):
        reset(["yellow"]);
        blocksArray[10].className==="starter";
        break;
        case ((this.id!=="endAqua")&&(blocksArray[20].className==="block aqua")):
        reset(["aqua"]);
        blocksArray[20].className==="starter";
        break;
        default:
        blocksArray[0].className="starter";
        blocksArray[8].className="starter";
        blocksArray[14].className="starter";
        blocksArray[30].className="starter";
        blocksArray[10].className="starter";
        blocksArray[20].className="starter";
      }
    });
  });
}

function reset(colors) {
  console.log("i am in resetting colors");
  colors.forEach(function(color,i) {
    blocksArray.forEach(function(block,i) {
      if(block.className ===("block"+" "+ color)) {
        block.className="block";
      }
    })
  })
  console.log("i finished reset color");
}

// function resetInitialPosition() {

// }

// $(function() {
//   console.log("jQuery Loaded");
//     var x = 50;
//     var xId=setInterval(function(){
//       $('html').css('background-position', x + 'px 0');
//       x-=1;
//       if (x===0) {
//         clearInterval(xId);
//       }
//     }, 10);
// });









