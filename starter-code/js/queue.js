$(document).ready(function(){

    var queue = new QueueDataStructure();

    $('.btn-blue-queue').click(function(e){
        
        var value = $('.input-queue').val();
            $('.queue-grey').last().addClass('element').removeClass('queue-grey').html('<p class=p> ' + value + '</p>');
            
            if(queue.queueControl.length<0){
                $('.queue-last').last().addClass('element-flow').removeClass('queue-grey-past').html('<p class=p> Queue Overflow </p>');
            }
    })

    $('.btn-red-queue').click(function(e){

        queue.dequeue(value);
        
        if(queue.isEmpty()){
            $('.queue-grey').last().addClass('element').removeClass('queue-grey');
            var value = $('.input').val();
            queue.queueControl.unshift(value);
        }else{
            $('.queue-grey').last().addClass('element').removeClass('queue-grey');
            $('.element').last().addClass('queue-grey-past').removeClass('element').html('<p></p>');
            
        }
    })

})