document.body.onload = addContainer;

var container = document.createElement('div');
var blocksArray=[];

function addContainer() {
  container.setAttribute("class", "container");
  document.body.appendChild(container);
  addBlocks();
}

function addBlocks() {
  var blockNumber = 36;
  for (var i=0; i<36; i++) {
    var block = document.createElement('div');
    block.setAttribute("class", "block");
    container.appendChild(block);
    blocksArray.push(block);
  }
  blocksStarter();
}

function blocksStarter() {
  blocksArray[0].setAttribute("id", "blockRed");
}