document.addEventListener("DOMContentLoaded", function() { 


    var stack = new StackDataStructure()

    var buttonAdd = document.querySelector("#stackadd")
    var buttonTake = document.querySelector("#stacktake")
    var stackpops = document.querySelector("#stackpops")
    var stackoverflow = document.querySelector("#stackoverflow")
    var stackunderflow = document.querySelector("#stackunderflow")

    var input = document.querySelector("#stackinput")
    var elmtoAdd = 0

    var boxes = document.querySelector("#stackboxes")
    var stackboxes = []
    //Reverting natural order of divs to match logic array order
    for (var i=boxes.children.length-1; i>=0; i--){
        stackboxes.push(boxes.children[i])
    }

    buttonAdd.onclick = function(){
        elmtoAdd = input.value

        if (stack.push(elmtoAdd)!="Stack Overflow"){
            stackBoxesUpdate(stackboxes,stack)
            input.value = ""  //clear input field
        } else {
            stackoverflow.style.visibility="visible"
            setTimeout(function(){
                stackoverflow.style.visibility="hidden"
            },1000)
        }
    }

    buttonTake.onclick = function(){
        var elmpopped = stack.pop()
        if(elmpopped!="Stack Underflow"){
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

//This function is global scoped because it is called from stack and queue
//Its purpose is updating the "DOM stack"(the visible one) on each button click
function stackBoxesUpdate(boxarray,stack){
    for (var i=0; i<boxarray.length; i++){
        boxarray[i].textContent=stack.stackControl[i]
        if(boxarray[i].textContent != ""){
            boxarray[i].className="box full"
        } else {boxarray[i].className="box empty"} 
    }
}

