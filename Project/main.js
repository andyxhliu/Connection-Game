setTimeout(function() {
  console.log("Timeout function called");
}, 2000);

var time=20;
var popUpScreen = document.createElement('div');
var endScreen = document.createElement('div');
var levelId = document.createElement('div'); 
var container = document.createElement('div');
var resetButton = document.createElement('div');
var helpButton = document.createElement('div');
var helpScreen = document.createElement('div');
var blocks=document.createElement('div');
var backButton = document.createElement('div');
var homeButton = document.createElement('div');
var timerDisplay = document.createElement('div');
var display = document.createElement('div');
var buttonNext = document.createElement('div');
var buttonReplay = document.createElement('div');
var buttonHome = document.createElement('div');
var welcomeScreen = document.createElement('div');
var blocksArray=[];
var allColors=["red","blue","green","purple","yellow","aqua"];
var block;
var j;
var color;
var result=null;
var level=0;
var blocksAdded=0;

var initialPositions=[
  {
    initRed: 0,
    endRed: 24,
    initBlue: 8,
    endBlue: 15,
    initGreen: 14,
    endGreen: 35,
    initPurple: 30,
    endPurple: 28,
    initYellow: 10,
    endYellow: 26,
    initAqua:20,
    endAqua:25
  },
  {
    initRed: 0,
    endRed: 19,
    initBlue:5,
    endBlue:9,
    initGreen:4,
    endGreen:29,
    initPurple:27,
    endPurple:35,
    initYellow:6,
    endYellow:33,
    initAqua:25,
    endAqua:22
  },
  {
    initRed:0,
    endRed:28,
    initBlue:10,
    endBlue:14,
    initGreen:1,
    endGreen:17,
    initPurple:31,
    endPurple:26,
    initYellow:30,
    endYellow:12,
    initAqua:32,
    endAqua:15
  },
  {
    initRed:1,
    endRed:6,
    initBlue:12,
    endBlue:7,
    initGreen:2,
    endGreen:31,
    initPurple:25,
    endPurple:35,
    initYellow:10,
    endYellow:14,
    initAqua:15,
    endAqua:22
  },
  {
    initRed:34,
    endRed:12,
    initBlue:5,
    endBlue:35,
    initGreen:4,
    endGreen:22,
    initPurple:18,
    endPurple:33,
    initYellow:26,
    endYellow:7,
    initAqua:20,
    endAqua:8
  },
  {
    initRed:0,
    endRed:8,
    initBlue:24,
    endBlue:6,
    initGreen:5,
    endGreen:30,
    initPurple:16,
    endPurple:35,
    initYellow:10,
    endYellow:29,
    initAqua:12,
    endAqua:19
  },
  {
    initRed:10,
    endRed:0,
    initBlue:4,
    endBlue:27,
    initGreen:1,
    endGreen:8,
    initPurple:30,
    endPurple:19,
    initYellow:35,
    endYellow:5,
    initAqua:12,
    endAqua:24
  },
  {
    initRed:20,
    endRed:0,
    initBlue:6,
    endBlue:14,
    initGreen:33,
    endGreen:5,
    initPurple:18,
    endPurple:27,
    initYellow:11,
    endYellow:35,
    initAqua:25,
    endAqua:12
  },
  {
    initRed:12,
    endRed:0,
    initBlue:23,
    endBlue:20,
    initGreen:31,
    endGreen:17,
    initPurple:28,
    endPurple:35,
    initYellow:27,
    endYellow:15,
    initAqua:25,
    endAqua:34
  },
  {
    initRed:0,
    endRed:3,
    initBlue:23,
    endBlue:5,
    initGreen:4,
    endGreen:6,
    initPurple:25,
    endPurple:34,
    initYellow:31,
    endYellow:22,
    initAqua:35,
    endAqua:19
  }
];

function addContainer() {
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  blocks.setAttribute("class", "blocks");
  document.getElementsByClassName("container")[0].appendChild(blocks);
  addResetButton();
  addBlocks();
  addHelpButton();
  blocksStarter();
  addDisplay();
  addButtonNext();
  addButtonReplay();
  addButtonHome();
  addPopUpScreen();
  addlevelId();
  startTiming();
}

function addAllEventListener() {
  addButtonReplayToListen();
  addEventListenerMouseUp();
  addHomeButtonToListen();
  addButtonHomeToListen()
  addButtonNextToListen();
}

function startTiming() {
  time=20;
  var timerId=setInterval(function() {
    time--;
    addTimerDisplay();
    if (time===0 || result==="win") {
      result=null;
      clearInterval(timerId);
      if (time===0) {
        display.setAttribute("class","display"+" lose");
        popUpScreen.setAttribute("class","popUpScreenLose");
        buttonNext.setAttribute("class", "buttonNext");
        buttonReplay.setAttribute("class", "buttonReplay"+" win");
        buttonHome.setAttribute("id", "buttonHomeWin");
        reset(allColors);
      }
    }
  }, 1000);
}

function addPopUpScreen() {
  popUpScreen.setAttribute("class","popUpScreen");
  document.body.appendChild(popUpScreen);
}

function addTimerDisplay() {
  timerDisplay.setAttribute("class", "timerDisplay");
  document.body.insertBefore(timerDisplay,container);
  timerDisplay.innerHTML="SECONDS REMAINING"+"<br>"+"<span>"+time+"</span>";
}

function addlevelId() {
  levelId.setAttribute("class", "levelId");
  document.body.insertBefore(levelId, container);
  levelId.innerHTML="LEVEL "+(level+1);
}

function addButtonHome() {
  buttonHome.setAttribute("id", "buttonHome");
  document.getElementsByClassName("container")[0].appendChild(buttonHome);

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

function addBlocks() {
  if (blocksAdded===0) {
    var blockNumber = 36;
    for (var i=0; i<36; i++) {
      block = document.createElement('div');
      block.setAttribute("class", "block");
      document.getElementsByClassName("blocks")[0].appendChild(block);
      blocksArray.push(block);
    }
  }
}

function blocksStarter() {
  blocksArray[initialPositions[level].initRed].setAttribute("id", "initRed");
  blocksArray[initialPositions[level].initRed].setAttribute("class", "starter");
  blocksArray[initialPositions[level].endRed].setAttribute("id", "endRed");
  blocksArray[initialPositions[level].endRed].setAttribute("class", "starter");

  blocksArray[initialPositions[level].initBlue].setAttribute("id", "initBlue");
  blocksArray[initialPositions[level].initBlue].setAttribute("class", "starter");
  blocksArray[initialPositions[level].endBlue].setAttribute("id", "endBlue");
  blocksArray[initialPositions[level].endBlue].setAttribute("class", "starter");

  blocksArray[initialPositions[level].initGreen].setAttribute("id", "initGreen");
  blocksArray[initialPositions[level].initGreen].setAttribute("class", "starter");
  blocksArray[initialPositions[level].endGreen].setAttribute("id", "endGreen");
  blocksArray[initialPositions[level].endGreen].setAttribute("class", "starter");

  blocksArray[initialPositions[level].initPurple].setAttribute("id", "initPurple");
  blocksArray[initialPositions[level].initPurple].setAttribute("class", "starter");
  blocksArray[initialPositions[level].endPurple].setAttribute("id", "endPurple");
  blocksArray[initialPositions[level].endPurple].setAttribute("class", "starter");

  blocksArray[initialPositions[level].initYellow].setAttribute("id", "initYellow");
  blocksArray[initialPositions[level].initYellow].setAttribute("class", "starter");
  blocksArray[initialPositions[level].endYellow].setAttribute("id", "endYellow");
  blocksArray[initialPositions[level].endYellow].setAttribute("class", "starter");

  blocksArray[initialPositions[level].initAqua].setAttribute("id", "initAqua");
  blocksArray[initialPositions[level].initAqua].setAttribute("class", "starter");
  blocksArray[initialPositions[level].endAqua].setAttribute("id", "endAqua");
  blocksArray[initialPositions[level].endAqua].setAttribute("class", "starter");
  addEventListenerMouseDown(initRed);
  addEventListenerMouseDown(initBlue);
  addEventListenerMouseDown(initGreen);
  addEventListenerMouseDown(initPurple);
  addEventListenerMouseDown(initYellow);
  addEventListenerMouseDown(initAqua);
  addEventListenerMouseOver();
}

function addEventListenerMouseDown(init) {
  init.addEventListener("mousedown", function() {
    color = this.id.replace("init", "").toLowerCase();
    this.className = "block"+" "+ color;
  });
}

function addEventListenerMouseOver() {
  blocksArray.forEach(function(block, i) {
    block.addEventListener("mouseover", function() {
      if(event.buttons === 1 &&
        this.className!=="starter" && /*Means it is not the initial blocks*/
        this.className==="block" && /*Means it is not been asigned any color*/
        (blocksArray[i-1] && blocksArray[i-1].className === "block"+" "+ color ||
          blocksArray[i-6] && blocksArray[i-6].className === "block"+" "+ color ||
          blocksArray[i+1].className === "block"+" "+ color ||
          blocksArray[i+6].className === "block"+" "+ color)/*To allow it move accordingly*/
        ) {
        this.className = "block"+" "+ color;
        checkWin(); 
      }
    });
  });
}

function addEventListenerMouseUp() {
  blocksArray.forEach(function(block, i) {
    block.addEventListener("mouseup", function() {
      switch(true) {
        case ((this.id!=="endRed")&& (blocksArray[initialPositions[level].initRed].className==="block red")):
        reset(["red"]);
        blocksArray[initialPositions[level].initRed].className==="starter";
        break;
        case ((this.id!=="endBlue")&& (blocksArray[initialPositions[level].initBlue].className==="block blue")):
        reset(["blue"]);
        blocksArray[initialPositions[level].initBlue].className==="starter";
        break;
        case ((this.id!=="endGreen")&&(blocksArray[initialPositions[level].initGreen].className==="block green")):
        reset(["green"]);
        blocksArray[initialPositions[level].initGreen].className==="starter";
        break;
        case ((this.id!=="endPurple")&&(blocksArray[initialPositions[level].initPurple].className==="block purple")):
        reset(["purple"]);
        blocksArray[initialPositions[level].initPurple].className==="starter";
        break;
        case ((this.id!=="endYellow")&&(blocksArray[initialPositions[level].initYellow].className==="block yellow")):
        reset(["yellow"]);
        blocksArray[initialPositions[level].initYellow].className==="starter";
        break;
        case ((this.id!=="endAqua")&&(blocksArray[initialPositions[level].initAqua].className==="block aqua")):
        reset(["aqua"]);
        blocksArray[initialPositions[level].initAqua].className==="starter";
        break;
        default:
        blocksArray[initialPositions[level].initRed].className="starter";
        blocksArray[initialPositions[level].initBlue].className="starter";
        blocksArray[initialPositions[level].initGreen].className="starter";
        blocksArray[initialPositions[level].initPurple].className="starter";
        blocksArray[initialPositions[level].initYellow].className="starter";
        blocksArray[initialPositions[level].initAqua].className="starter"; /*To allow check win works properly*/
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
      buttonHome.setAttribute("id","buttonHomeWin");
      popUpScreen.setAttribute("class", "popUpScreenWin");
    }
  }
}

function addButtonNextToListen() {
  buttonNext.addEventListener("click", function() {
    replay();
    for (var i=0; i<36; i++) {
      blocksArray[i].setAttribute("class","block");
    }
    blocksArray[initialPositions[level].initRed].removeAttribute("id","initRed");
    blocksArray[initialPositions[level].endRed].removeAttribute("id","endRed");
    blocksArray[initialPositions[level].initBlue].removeAttribute("id","initBlue");
    blocksArray[initialPositions[level].endBlue].removeAttribute("id","endBlue");
    blocksArray[initialPositions[level].initGreen].removeAttribute("id","initGreen");
    blocksArray[initialPositions[level].endGreen].removeAttribute("id","endGreen");
    blocksArray[initialPositions[level].initPurple].removeAttribute("id","initPurple");
    blocksArray[initialPositions[level].endPurple].removeAttribute("id","endPurple");
    blocksArray[initialPositions[level].initYellow].removeAttribute("id","initYellow");
    blocksArray[initialPositions[level].endYellow].removeAttribute("id","endYellow");
    blocksArray[initialPositions[level].initAqua].removeAttribute("id","initAqua");
    blocksArray[initialPositions[level].endAqua].removeAttribute("id","endAqua");/*To remove all the old colors*/
    level++;
    levelId.innerHTML="LEVEL "+(level+1);
    popUpScreen.setAttribute("class","popUpScreen");
    if (level < 10) {
      blocksStarter(); /*to re-assign the initial positions*/
    } else {
      result="win";
      showEndScreen();
    }
  })
}

function showEndScreen(){
  endScreen.setAttribute("id","endScreen");
  endScreen.innerHTML="YOU SURVIVED ...";
  // document.getElementById("endScreen").style.display="unset";
  homeButton.setAttribute("class","homeButton");
  endScreen.appendChild(homeButton);
  document.body.appendChild(endScreen);
}

function addHomeButtonToListen() {
  blocksAdded=1;
  homeButton.addEventListener("click", function() {
  console.log("clicked");
  document.getElementById("secondSplashScreen").style.display="unset";
  document.getElementById("splashscreen").style.display="unset";
  document.getElementById("endScreen").style.display="none";
  })
}

function addButtonHomeToListen() {
  blocksAdded=1;
  buttonHome.addEventListener("click", function() {
  replay();
  document.getElementById("secondSplashScreen").style.display="unset";
  popUpScreen.setAttribute("class","popUpScreen");
  })
}

function addButtonReplayToListen() {
  buttonReplay.addEventListener("click", function() {
    replay();
    popUpScreen.setAttribute("class","popUpScreen");
  })
}

function replay() {
  reset(allColors);
  display.setAttribute("class","display");
  buttonNext.setAttribute("class", "buttonNext");
  buttonReplay.setAttribute("class", "buttonReplay");
  buttonHome.setAttribute("id", "buttonHome");
  time=20;
  startTiming();
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
    popUpScreen.setAttribute("class","popUpScreen");
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

function reset(colors) {
  colors.forEach(function(color,i) {
    blocksArray.forEach(function(block,i) {
      if(block.className ===("block"+" "+ color)) {
        block.className="block";
      }
    })
  })
}

$(function() {
  $('.start').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
  });

  $('#secondSplashScreen').click(function () {
    $(this).fadeOut(500);
    level=0;
    addContainer();
    addAllEventListener();
  });
});
