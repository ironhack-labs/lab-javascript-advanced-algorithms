$(document).ready(function (){
    var queue = new QueueDataStructure();
    queue.queueControl = ["queue1","queue2"];

    printQueue(queue.queueControl);
    addElement(queue);
    removeElement(queue);

    //fix: can't bring these elements out of document ready, find out why
    function addElement(queue) {
        $("#add-queue-button").click(function(){
            
            if(queue.canEnqueue()){
                var InputVal = $("input[name='add-queue-element']").val();
                queue.enqueue(InputVal);  
                //probably not the best option to clear and reprint the whole array each time, but I wanted to use the 
                printQueue(queue.queueControl);
                //$("#queue-elements").append("<li>" + InputVal + "</li>");
            } else {
                //fix: make queue overflow text only appear once
                var overflowText = "queue Overflow";
                $("#queue-elements").prepend("<div>" + overflowText + "</div>");
            }
        }); 
    }
    
    function removeElement(queue) {
        $("#remove-queue-button").click(function(){
            if(!queue.isEmpty()){
                queue.dequeue(); 
                printQueue(queue.queueControl);
            } else {
                var overflowText = "queue Underflow";
                $("#queue-elements").text(overflowText);
            }
        }); 
    }
    
});

// print each element in the queue list as an li
function printQueue(array) {
    
    $("#queue-elements").empty();
    jQuery.each(array, function(i, arrayEl) {
        $("#queue-elements").prepend("<li>" + arrayEl + "</li>");
    });
}