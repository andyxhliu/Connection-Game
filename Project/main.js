document.body.onload = addContainer;

var container = document.createElement('div');
var blocksArray=[];
var block;
var flag=0;


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
    // block.addEventListener("mouseup", function(){
    //   flag=1;
    // }, false);
  }
  blocksStarter();
}

function blocksStarter() {
  blocksArray[0].setAttribute("id", "blockRed");
  addEventListener();
}

function addEventListener() {
  blockRed.addEventListener("mousedown", function() {
    for (var i=0; i<36; i++) {
      var blockId = document.getElementsByClassName("block")[i]; 
      blockId.addEventListener("mouseover", function() {
      determineDragOrMove(); 
        if (flag===0) {
          console.log("Hello");
        } 
      });
    };
  });
}

function determineDragOrMove() {
  for (var i=0; i<36; i++) {
  var blocks = document.getElementsByClassName("block")[i];
  blocks.addEventListener("mouseup", function(){
    flag=1;
    }, false);
  }
}