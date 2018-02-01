$(document).ready(function(){
    var queue = new QueueDataStructure();
    $("#add-queue").on("click", function(){
        if (queue.canEnqueue() && $("#queue-input").prop("value")!=""){
            var element = $("#queue-input").prop("value");
            queue.enqueue(element);
            console.log(queue.queueControl);
            var length = queue.queueControl.length;
            for (var i = length; i >0  ; i--){
                $(".queue-element:nth-child("+i+")").text(queue.queueControl[i-1]);
                $(".queue-element:nth-child("+i+")").addClass("addedelement");
            }
            $("#queue-input").prop("value", "");

        } else if (queue.canEnqueue()===false){
            $("#queue-container .over").css("display", "block");
            setTimeout(function(){
                $("#queue-container .over").css("display", "none");
            }, 1000);
        }
    });
    $("#delete-queue").on("click", function(){
        console.log("estas borrando")
        if (queue.isEmpty()){
            $("#queue-container .under").css("display", "block");
            setTimeout(function(){
                $("#queue-container .under").css("display", "none");
            }, 1000);
        } else{
            $(".queue-element:nth-child("+queue.queueControl.length+")").text("");
            $(".queue-element:nth-child("+queue.queueControl.length+")").removeClass("addedelement");
            $("#removed_queue strong").text("Taken queue: "+queue.dequeue());
            console.log(queue.queueControl);
            var length = queue.queueControl.length;
            for (var i = length; i >0  ; i--){
                $(".queue-element:nth-child("+i+")").text(queue.queueControl[i-1]);
                $(".queue-element:nth-child("+i+")").addClass("addedelement");
            }
        }
    });
});