$(document).ready(function(){
    $(".overq").css("display", "none");
    $(".underq").css("display", "none");
    var myQueue = new QueueDataStructure();

    $('#addq').click(function () {
        
        if (myQueue.canEnqueue()){
            myQueue.enqueue($('#inputq').prop('value'));
            
            for (i = 0; i < myQueue.queueControl.length; i++){
                var j = myQueue.MAX_SIZE - 1 - i;
                document.getElementsByClassName('queue')[j].innerHTML = myQueue.queueControl[i];
                $($(".queue")[j]).addClass("hh");
            }
            
            $(".underq").css("display", "none");
        } else {
            $(".overq").css("display", "inherit");
        }

    });

    $('#takeq').click(function () {
        
        if (!myQueue.isEmpty()){
            var poppedq = myQueue.dequeue();
                document.getElementsByClassName('queue')[myQueue.MAX_SIZE - myQueue.queueControl.length - 1].innerHTML = " ";
                $(".overq").css("display", "none");
                $($(".queue")[myQueue.MAX_SIZE - myQueue.queueControl.length - 1]).removeClass("hh");
        } else {
            $(".underq").css("display", "inherit");
        }


    });
});