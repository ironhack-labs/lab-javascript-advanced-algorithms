var queue = new QueueDataStructure ();

queue.queueControl = [];

window.onload = function(){




var addButton = document.querySelector('.btn-add-queue');
var takeButton = document.querySelector('.btn-take-queue');
var underFlow = document.querySelector(".underflow-queue");
var overFlow = document.querySelector(".overflow-queue");
var boxQueue = document.querySelector(".box-que");


addButton.onclick = addQueue;
takeButton.onclick = takeQueue;

function addQueue(){

  var inputQueue =  document.querySelector('input[id="queue"]').value;
  var boxRemove = document.querySelector(".box-queue");
  var boxQueue = document.querySelector(".box-que");

  if(queue.canEnqueue() && inputQueue !== ""){
    queue.enqueue(inputQueue);
    boxQueue.insertBefore(createBox(inputQueue), boxQueue.firstChild);
    boxQueue.removeChild(boxRemove);
    underFlow.style.display = "none";
  } 
  else if(!queue.canEnqueue()){
    overFlow.style.display = '';
  }
}


function createBox(inputQueue){

  var divTag = document.createElement("div");
  divTag.classList.add("occupied");
  divTag.appendChild(document.createTextNode(inputQueue));
  
  return divTag;
}

function takeQueue(){
  if(!queue.isEmpty){
    underFlow.style.display = "";
  } else {
    queue.queueControl.pop();
  boxQueue.removeChild(boxQueue);
  overFlow.style.display = 'none';}
 
};
}