var queue = new QueueDataStructure;
var queueNode = document.querySelector(".queue")

function printQueue(){
    var html="";
    for(i=0;i<queue.queueControl.length;i++){
        html +="<div class='stack_unit'>"+queue.queueControl[i]+"</div>"
    }
    if(!queue.canEnqueue()){
        html +="<div class='flow'>QUEUE OVERFLOW</div>";   
        }
    queueNode.innerHTML = html;
}

document.querySelector("#addbtn2").onclick = function(){
    if(document.querySelector("#input2").value!==""){
        queue.enqueue(document.querySelector("#input2").value);
        printQueue();   
        }
}

document.querySelector("#takebtn2").onclick = function(){
    queue.dequeue();
    if(queue.isEmpty()){
        queueNode.innerHTML = "<div class='flow'>QUEUE UNDERFLOW</div>"
    }else{
        printQueue();
    }

}