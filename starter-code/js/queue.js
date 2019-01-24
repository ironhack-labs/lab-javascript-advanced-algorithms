var queue=new QueueDataStructure()

let inputQueue=document.getElementById("queue-input")
let addQueue=document.getElementById("add-queue")
let removeQueue=document.getElementById("delete-queue")
let overQueue=document.getElementById("error-queue.over")
let underQueue=document.getElementById("error-queue.under")
let elementsQueue=document.getElementsByClassName("queue-element")


addQueue.click(function(){ 
    if(inputQueue.val()!==""){
        if(queue.canPush()){
            queue.push(inputQueue.val())
            inputQueue.val()=""
        } else{
            overQueue.addClass(".error-stack")
        }

    }

})

removeQueue.click(function(){
    if(!queue.isEmpty()){
        overQueue.removeClass("error-active")
        queue.pop()
    } else{
        underQueue.addClass("error-active")
    }
})