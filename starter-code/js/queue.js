document.addEventListener("DOMContentLoaded", function() { 


    var stack = new QueueDataStructure()

    var buttonAdd = document.querySelector("#queueadd")
    var buttonTake = document.querySelector("#queuetake")
    var stackpops = document.querySelector("#queuepops")
    var stackoverflow = document.querySelector("#queueoverflow")
    var stackunderflow = document.querySelector("#queueunderflow")

    var input = document.querySelector("#queueinput")
    var elmtoAdd = 0

    var boxes = document.querySelector("#queueboxes")
    var stackboxes = []
    //Reverting natural order of divs to match logic array order
    for (var i=boxes.children.length-1; i>=0; i--){
        stackboxes.push(boxes.children[i])
    }

    buttonAdd.onclick = function(){
        elmtoAdd = input.value

        if (stack.enqueue(elmtoAdd)!="Queue Overflow"){
            stackBoxesUpdate(stackboxes,stack)
            input.value = "" //clear input field
        } else {
            stackoverflow.style.visibility="visible"
            setTimeout(function(){
                stackoverflow.style.visibility="hidden"
            },1000)
        }
    }

    buttonTake.onclick = function(){
        var elmpopped = stack.dequeue()
        if(elmpopped!="Queue Underflow"){
            stackBoxesUpdate(stackboxes,stack)
            stackpops.textContent = elmpopped
        } else {
            stackunderflow.style.visibility="visible"
            setTimeout(function(){
                stackunderflow.style.visibility="hidden"
            },1000)
        }
    }






})