
document.addEventListener('DOMContentLoaded', function () {

var queue = new QueueDataStructure ();

var addButtonQueue = document.querySelector('.btn-add-queue');
var takeButtonQueue = document.querySelector('.btn-take-queue');
var underFlow = document.querySelector(".underflow-queue");
var overFlow = document.querySelector(".overflow-queue");


addButtonQueue.onclick = addQueue;
takeButtonQueue.onclick = takeQueue;

function addQueue(){

  var inputQueue =  document.querySelector('input[id="queue"]').value;

  if(queue.canEnqueue() && inputQueue !== ""){
    underFlow.style.display = "none";
    if(queue.queueControl.length === 0){
      queue.enqueue(inputQueue);
      $(".box-queue").first().addClass("occupied-queue").removeClass("box-queue").text(queue.queueControl[0]);
    } else {
      queue.enqueue(inputQueue);
      var newQueue = $("<div class='occupied-queue'>" + queue.queueControl[0] + "</div>");
      $(".occupied-queue").first().before(newQueue);
      $(".box-queue").last().remove();
    }
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
  $(".occupied-queue").last().remove();
  overFlow.style.display = 'none';
  queue.queueControl.pop();
  }
 };
});