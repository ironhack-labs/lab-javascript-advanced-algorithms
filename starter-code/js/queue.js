var queue =new QueueDataStructure();

$(document).ready(function(){
    for (var i=0; i<queue.MAX_SIZE; i++){ 
        $(".queue").append("<div class='queue-element'></div>");
    }
    
    $(".queue-element").css(cssElement);

    $("#form-queue .btn-primary").click(function (e){
        pushQueueElement ($("#input-queue").val());

    });

    $("#form-queue .btn-danger").click(function (e){
        popQueueElement ();
    });
});

function reasignQueueValues(){
    $(".queue-element").text("");
    console.log(queue.queueControl);
    for (var i = queue.queueControl.length; i>0; i--){
        var element = $(".queue-element:nth-child("+parseInt(queue.MAX_SIZE-queue.queueControl.length+i)+")");
        element.text((queue.queueControl[queue.queueControl.length-i]));
    }
}

function pushQueueElement(value) {
    if ($("#input-queue").val()==""){
        return;
    }
    $("#input-queue").val("");
    if(queue.enqueue(value) != "Queue Overflow"){
        $(".underflow").remove();
        var element = $(".queue-element:nth-child("+parseInt(queue.MAX_SIZE-queue.queueControl.length+1)+")");
        element.css(cssStack);
        reasignQueueValues();
    } else {
        outOfQueueBounds("overflow");
    }
}

function popQueueElement(){
    if(queue.dequeue()!="Queue Underflow"){
        $(".overflow").remove();
        var element = $(".queue-element:nth-child("+parseInt(queue.MAX_SIZE-queue.queueControl.length)+")");
        element.css(cssElement);
        reasignQueueValues();
    } else {
        outOfQueueBounds("underflow");
    }
}

function outOfQueueBounds(direction){
    queue.queueControl = ["I", "R", "O", "N", "H", "A", "C", "K"];
    var parent = $(".queue");
    console.log(parent);
    if (direction=="overflow"){
        parent.prepend("<div class='"+direction+"'></div>");
    } else {
        parent.append("<div class='"+direction+"'></div>");
    }
    $("."+direction).css(cssOverflow).text("queue "+direction);
    reasignQueueValues();
    $(".queue-element").css(cssStack);
}
