var queue = new QueueDataStructure()
var addButtonq =  document.getElementById("add-button-q");
var removeButtonq =  document.getElementById("remove-button-q");


addButtonq.addEventListener("click", function(){
  document.getElementById("message-underq").removeAttribute("class", "message");
  document.getElementById("message-underq").innerHTML="";
  queue.enqueue(document.getElementById("inputq").value);
   console.log(document.getElementById("inputq").value);
   for(var i =0; i< queue.queueControl.length ; i++){
    document.getElementById("q" +i).innerHTML = queue.queueControl[i];
    document.getElementById("q" +i).setAttribute("class","activeq")
   }
   if(queue.queueControl.length ===8){
    document.getElementById("message-overq").setAttribute("class", "message");
    document.getElementById("message-overq").innerHTML="Queue Overflow";
  }
})

removeButtonq.addEventListener("click", function(){
    document.getElementById("message-overq").removeAttribute("class", "message");
    document.getElementById("message-overq").innerHTML="";
    queue.dequeue();
    document.getElementById("q"+ queue.queueControl.length).innerHTML = "";
    document.getElementById("q"+ queue.queueControl.length).setAttribute("class", "greyBlockq");
   for(var i = queue.queueControl.length ; i>0 ; i--){
    document.getElementById("q"+ (i-1)).innerHTML = queue.queueControl[(i-1)];
   }
   if(queue.isEmpty()){
    document.getElementById("message-underq").setAttribute("class", "message");
    document.getElementById("message-underq").innerHTML="Queue Underflow";
  }
})