$(function(){
    var queue = new QueueDataStructure;
    queue.MAX_SIZE=8;
    var queueHtml = "";
    for(i=0;i<queue.MAX_SIZE;i++){
        queueHtml += '<div class="queue-element"></div> \n';
        // $('.queue.container').append(`<div class="queue-element"></div>`);
    }   
    $('.queue.container').html(queueHtml);

    queue.printQueue(); 

    $('.queue.add').on("click",function(){
        queue.enqueue($('.queue.input').prop("value"));
        queue.printQueue();
    });

    $('.queue.take').on("click",function(){
        queue.dequeue();
        queue.printQueue();
    });

})