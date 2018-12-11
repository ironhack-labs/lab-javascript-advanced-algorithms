var queue = new QueueDataStructure ();

queue.queueControl = [];

window.onload = function(){

var addButton = document.querySelector('.btn-add-queue');
var takeButton = document.querySelector('.btn-take-queue');
var underFlow = document.querySelector(".underflow-queue");
var overFlow = document.querySelector(".overflow-queue");


addButton.onclick = addQueue;
takeButton.onclick = takeQueue;

function addQueue(){

  var inputQueue =  document.querySelector('input[id="queue"]').value;

  if(queue.canEnqueue() && inputQueue !== ""){
    underFlow.style.display = "none";
    queue.enqueue(inputQueue);
    $( ".box-queue" ).last().addClass("occupied").removeClass("box-queue").text(queue.queueControl[0]);
  } 
  else if(!queue.canEnqueue()){
    overFlow.style.display = '';
  }
}


function takeQueue(){
  var boxOccupied = document.getElementById(".ocuppied");
  if(queue.isEmpty()){
    underFlow.style.display = "";
  } else {
  $(".box-que").prepend("<div class='box-queue'></div>");
  $(".occupied").last().remove();
  overFlow.style.display = 'none';
  queue.queueControl.pop();
  }
 };
}