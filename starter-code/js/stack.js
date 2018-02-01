$(document).ready(function(){
   
    stack = new StackDataStructure();
    queue = new QueueDataStructure();

    var stackedElem = 14;
    var enqueuedElem = 1;

    $("#add-stack").on("click", function(){
       
        var inputValue = $("#stackelement").prop("value");
        if(inputValue !== ""){
            if(stackedElem === 15){
                $("#stack-div div:nth-child(15)").css("display", "none");
                stackedElem--;
            } else if(stackedElem > 4){
            var newStack = stack.push(inputValue);
            $("#stack-div div:nth-child(" + stackedElem + ")").text(newStack[newStack.length-1]);
            $("#stack-div div:nth-child(" + stackedElem + ")").addClass("addedelement");
                stackedElem--;
                $("#stackelement").prop("value", "");
            } else{
                $("#stack-div div:nth-child(4)").css("display", "block");
            } 
            $("#stackelement").prop("value", "");
        } 
    });

    $("#delete-stack").on("click", function(){
        if(stackedElem === 4){
            $("#stack-div div:nth-child(4)").css("display", "none");
            stackedElem++;
        } else if(stackedElem < 15){
            stack.pop();
            $("#stack-div div:nth-child(" + stackedElem + ")").text("");
            $("#stack-div div:nth-child(" + stackedElem + ")").removeClass("addedelement");
            stackedElem++;
        } else {
            $("#stack-div div:nth-child(15)").css("display", "block");
        }
    });

    $("#add-queue").on("click", function(){
        if(enqueuedElem === 0){
            $("#queue-underflow").css("display", "none");
            enqueuedElem++;
        } else if(enqueuedElem < 11){
            var newQueue = queue.enqueue($("#queue-input").prop("value"));
            $("#queue-div div:nth-child(" + enqueuedElem +")").text(newQueue[newQueue.length-1]);
            $("#queue-div div:nth-child(" + enqueuedElem +")").addClass("queue-item")
            enqueuedElem++;
        } else {
            $("#queue-overflow").css("display", "block");
        }
    });

    $("#delete-queue").on("click", function(){
        if(enqueuedElem === 11){
            $("#queue-overflow").css("display", "none");
            enqueuedElem--;
        } else if(enqueuedElem > 0){
            var newQueue = queue.dequeue();
            $("#queue-div div:nth-child(" + enqueuedElem +")").text("");
            $("#queue-div div:nth-child(" + enqueuedElem +")").removeClass("queue-item")
            enqueuedElem--;
        } else {
            $("#queue-underflow").css("display", "block");
        }
    });





});