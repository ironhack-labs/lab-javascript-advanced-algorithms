$(()=>{
    let queue = new QueueDataStructure();
    $("#addQueue").on("click", function() {
        addToQueue();
    });
    $("#removeQueue").on("click", function() {
        removeFromQueue();
    });
    function addToQueue() {
        let newElementToQueue = $("#inputQueue").val();
        (newElementToQueue) &&
            ((queue.canEnqueue()) ? ($("#QueueUnderflow").hide(),
            newQueue = queue.enqueue(newElementToQueue)) : 
            $("#QueueOverflow").show())
            for (i=0;i<newQueue.length;i++){
                nextPlace = "#queue_"+(queue.MAX_SIZE - (i + 1)),
                $(nextPlace).addClass("filled"),
                $(nextPlace)[0].innerText=newQueue[i];
            }
    }
    function removeFromQueue() {
        (!queue.isEmpty()) ? 
        ($("#QueueOverflow").hide(), queue.dequeue(),
        nextPlace = "#queue_"+(queue.MAX_SIZE - 1 - queue.queueControl.length),
        $(nextPlace).removeClass("filled"),
        $(nextPlace)[0].innerText="-") : $("#QueueUnderflow").show()
    }
});