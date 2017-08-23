var queue;
var divQueue;
  function createDiv2(){
    var myDiv = $("<div>");
    myDiv.addClass("emptyQueue");
    return myDiv;
  }


function showQueue (){
    var addedDiv;
    var toPush = $(".inputSecond").val();
    queue.enqueue(toPush);
    addedDiv = $(".emptyQueue")[0];
    $(addedDiv).addClass("addedQueue");
    $(addedDiv).removeClass("emptyQueue");
    $(addedDiv).text(toPush);
  }

  function hideQueue(){
    var divtoEliminate = $(".addedQueue")[0];
    $(divtoEliminate).addClass("emptyQueue");
    $(divtoEliminate).removeClass("addedQueue");
    $(divtoEliminate).text("");
    queue.dequeue();
  }


$(document).ready(function(){

queue = new QueueDataStructure();

divQueue = $(".queueHere");

for(var i = 0; i < stack.MAX_SIZE; i++){
  divQueue.append(createDiv2());
}
 $(".addqueue").on("click", function(){
   showQueue();
 });

 $(".takequeue").on("click", function(){
   hideQueue();
 });

});
