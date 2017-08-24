
var queue;

$(document).ready(function(){
    queue = new QueueDataStructure();
});

$(".add-button-queue").on("click", function(){
    element = $(".element-input-queue").val();
    if (!queue.canEnqueue() && element) {
        $(".element-input-queue").val("")
        alert("Stack Overflow")
    } else if (element) {
        queue.enqueue(element);
        var enqueueBox = $(".queue-box").last();
        enqueueBox.text(element);
        enqueueBox.removeClass("queue-box");
        enqueueBox.addClass("queue-box-filled");
        $(".element-input-queue").val("")
    } else {
        alert("Can't add empty item!")
    } 
});

$(".remove-button-queue").on("click", function(){
    if (queue.isEmpty()) {
        alert("Stack Underflow");
    } else {
        queue.dequeue();
        var dequeueBox = $(".queue-box-filled").last();
        if (dequeueBox.prev().hasClass("queue-box-filled")) {
             var dequeueBoxArray = $(".queue-box-filled");
            // var dequeueBoxArray = dequeueBoxArray.slice(1);
            $(".queue-box-filled").first().addClass("queue-box");
            $(".queue-box-filled").first().removeClass("queue-box-filled");
             console.log(dequeueBoxArray)
             for (i = (dequeueBoxArray.length - 1); i >= 0; i--) {
                console.log(dequeueBoxArray[i]);
                var prevDiv = $(dequeueBoxArray[i]).prev();
                
                var prevText = prevDiv.text();
                $(dequeueBoxArray[i]).text(prevText);
                console.log(dequeueBoxArray[i]);
                console.log(prevText + " prevText");
                prevDiv.text("");
                
             }
        } else {
            dequeueBox.addClass("queue-box");
            dequeueBox.removeClass("queue-box-filled");
            dequeueBox.text("");
        }
    
    }
});