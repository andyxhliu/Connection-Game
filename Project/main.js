document.body.onload = addContainer;

var container = document.createElement('div');
var blocksArray=[];
var block;


function addContainer() {
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  addBlocksToListen();
}

function addBlocksToListen() {
  var blockNumber = 36;
  for (var i=0; i<36; i++) {
    block = document.createElement('div');
    // var callback = function () {
    //   block.addEventListener("mouseover", function() {
    //   console.log("Hello");
    // });
    block.setAttribute("class", "block");
    container.appendChild(block);
    blocksArray.push(block);
  }
  // block.setAttribute("class", "block");
  // container.appendChild(block);
  // blocksArray.push(block);
  blocksStarter();
}
  // blocksStarter();


function blocksStarter() {
  blocksArray[0].setAttribute("id", "blockRed");
  addEventListener();
}

function addEventListener() {
  blockRed.addEventListener("mousedown", function() {
    for (var i=0; i<36; i++) {
      var blockId = document.getElementsByClassName("block")[i];  
      blockId.addEventListener("mouseover", function() {
          console.log("Hello");
      });
    };
  });
}

// .addEventListener("click", myFunction);
