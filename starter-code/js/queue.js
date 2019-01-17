var queue = new QueueDataStructure();
queue.MAX_SIZE = 5;

var queueHTML = document.querySelector("#queue")
var queueText = document.querySelector("#queueText")
var queueTake = document.querySelector("#queuetake")
var queueAdd = document.querySelector("#queueAdd")


for(var a = 0;a < queue.MAX_SIZE; a++){
  var div = document.createElement("div")
  div.className = "col"
  div.className += " queueDiv"
  queueHTML.appendChild(div);
}

var divQueue = document.querySelectorAll(".queueDiv")

queueAdd.addEventListener("click",function(){
/// AÑADIR ELEMENTOS


//Añadie a Array


  queue.enqueue(queueText.value);
  var pos = queue.queueControl.length
  var div = document.querySelectorAll(".queueDiv");

  for(var c = 0;c < pos; c++){

  div[c].style.background = "red"
  div[c].innerHTML = queue.queueControl[c]

  }



})

queueTake.addEventListener("click", function(){

  queue.dequeue()
  var div = document.querySelectorAll(".queueDiv")
 
  for(var a = 0; a < queue.queueControl.length+1;a++){
    div[a].style.background = ""
    div[a].innerHTML = ""
  }

  for(var b = 0; b < queue.queueControl.length;b++){

    div[b].style.background = "red"
    div[b].innerHTML = queue.queueControl[b]
  }

})