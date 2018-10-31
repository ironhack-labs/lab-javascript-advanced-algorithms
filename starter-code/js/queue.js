$(function(){
    var queue = new QueueDataStructure;
    queue.MAX_SIZE=8;
    
    for(i=0;i<queue.MAX_SIZE;i++){
        $('.queue.container').append(`<div class="queue-element"></div>`);
    }   
})