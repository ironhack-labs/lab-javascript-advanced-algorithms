var queue;
var divQueue;
  function createDiv2(){
    var myDiv = $("<div>");
    myDiv.addClass("emptyQueue col-sm-1");
    return myDiv;
  }


function showQueue (){
    var addedDiv;
    var toPush = $(".inputSecond").val();
    queue.enqueue(toPush);
    addedDiv = $(".emptyQueue")[0];
    $(addedDiv).addClass("addedQueue");
    $(addedDiv).removeClass("emptyQueue");
    //$(addedDiv).text(toPush);
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
   var alertEmpty = $(".emptyQueue")[queue.MAX_SIZE - 1];
   $(alertEmpty).removeClass("redQueue");
   $(alertEmpty).text("");

   if(queue.canEnqueue()){
   showQueue();
   var myQueue = $(".addedQueue");
   myQueue.each(function(index){
     $(this).text(queue.queueControl[index]);
   });
 }
  else{
    var alertFull = $(".addedQueue")[0];
    $(alertFull).addClass("redQueue");
    $(alertFull).text("QUEUE OVERFLOW");
  }
   });

 $(".takequeue").on("click", function(){
   var alertFull = $(".addedQueue")[0];
   $(alertFull).removeClass("redQueue");
   $(alertFull).text("");

   if(!queue.isEmpty()){
   hideQueue();
   var myQueue = $(".addedQueue");
   myQueue.each(function(index){
     $(this).text(queue.queueControl[index]);
   });
 }
  else{
    var alertEmpty = $(".emptyQueue")[queue.MAX_SIZE - 1];
    $(alertEmpty).addClass("redQueue");
    $(alertEmpty).text("QUEUE UNDERFLOW");
  }
 });

});
