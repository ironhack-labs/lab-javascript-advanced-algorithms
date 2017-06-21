$(document).ready(function(){
    $("#addToQueue").on("click", function() {
        if($('#newQueueElement').val().trim() !== ''){
            pushIntoQueue($('#newQueueElement').val());
            $('#newQueueElement').val(''); 
        }
    });

     $("#takeFromQueue").on("click", function() {
        takeFromQueue();
    });
});


var queue; 
function initialiseQueue () {
    queue = new QueueDataStructure();
    var queueUIParentElement = $('.queue');
    for(var i = 0; i<queue.MAX_SIZE; i++) {
        queueUIParentElement.append("<div class='empty-element'></div>");
    }
}

function listAllQueueElements() {
    $('.queue').children('.element').remove();
    var queueUIParentElement = $('.queue');
    console.log(queue.queueControl.length);
    for(var i=0; i<queue.queueControl.length; i+=1) {
        queueUIParentElement.append('<div class="element">' + queue.queueControl[i] + '</div>');
    
    }
    
}

function pushIntoQueue(element) {
    var result = queue.enqueue(element);
    if (result === "Queue Overflow") {
        $('.queueMessage').text("Queue Overflow");
        $('.queueMessage').show();
    }
    else {
        $('.queueMessage').text('');
        $('.queue').children('.empty-element').slice(0, 1).remove();
        $('.queueMessage').hide();
        listAllQueueElements();
    }
    
}

function takeFromQueue() {
    var elementToRemove = queue.dequeue();
    if (elementToRemove === "Queue Underflow") {
        $('.queueMessage').text("Queue Underflow");
        $('.queueMessage').show();
    } else {
        queue.queueControl.pop(elementToRemove);
        $('.queueMessage').text('');
        $('.queue').append('<div class="empty-element"></div>');
          $('.queueMessage').hide();
        listAllQueueElements();
    }
    
    
}

initialiseQueue();