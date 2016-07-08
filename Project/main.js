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
    block.setAttribute("class", "block");
    container.appendChild(block);
    blocksArray.push(block);
  }
  blocksStarter();
}

function blocksStarter() {
  blocksArray[0].setAttribute("id", "blockRed");
  addEventListener();
}

function addEventListener() {
  blockRed.addEventListener("mousedown", function() {
    this.className = "block selected";
    blocksArray.forEach(function(block, i) {
      block.addEventListener("mouseover", function() {
        if(event.buttons === 1 && (blocksArray[i-1].className === "block selected"||blocksArray[i-6].className === "block selected" ||blocksArray[i+1].className === "block selected" || blocksArray[i+6].className === "block selected")) {
          this.className = "block selected";
        }
      });
    });
  });
}
