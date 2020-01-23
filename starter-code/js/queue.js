
let queueClass = new QueueDataStructure()



let queueAdd = document.querySelector(".queue .blue")
let queueTake = document.querySelector(".queue .red")
let queueVisualBoxes = document.querySelectorAll(".visual-queue")
let inputForQueue = document.querySelector(".queue input").value


queueAdd.addEventListener("click", ()=> {

    inputForQueue = document.querySelector(".queue input").value
    queueClass.enqueue(inputForQueue)

    queueVisualBoxes.forEach((elm)=> elm.innerText ="")
    queueClass.queueControl.forEach((elm, idx) => queueVisualBoxes[idx].innerText = elm)


    paintQueueBoxes()
 
})

queueTake.addEventListener("click", ()=> {

    queueClass.dequeue(inputForQueue)
    queueVisualBoxes.forEach((elm)=> elm.innerText ="")
    queueClass.queueControl.forEach((elm, idx) => queueVisualBoxes[idx].innerText = elm)

    paintQueueBoxes()
    
})



function paintQueueBoxes(){

    queueVisualBoxes.forEach((elm) => {
        elm.classList.remove("filled")

        if(elm.innerText){
            elm.classList.add("filled")
        }
    })   
    }
    



//stackVisualBoxes.forEach((elm, idx) => elm.innerText = stackClass.stackControl[idx])

