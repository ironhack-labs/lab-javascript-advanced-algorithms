let queue = new QueueDataStructure();

document.getElementById("add-element-queue").addEventListener("click", function (){
    document.getElementById("alert-underflow-queue").classList.add("underflow");
    document.getElementById("alert-underflow-queue").classList.remove("underflow-show");
    if (queue.enqueue(document.getElementById("input-queue").value) === "Queue Overflow"){
        document.getElementById("alert-overflow-queue").classList.remove("overflow");
        document.getElementById("alert-overflow-queue").classList.add("overflow-show");
    } else {
        for (let i = 0; i < queue.queueControl.length; i++) {
            if (i === 0) {
                document.getElementById("q"+i).innerHTML = queue.queueControl[0];
                document.getElementById("q"+i).classList.add("btn-primary");
                document.getElementById("q"+i).classList.remove("btn-secondary");
            } else if (i > 0) {
                document.getElementById("q"+i).innerHTML = queue.queueControl[i];
                document.getElementById("q"+i).classList.add("btn-primary");
                document.getElementById("q"+i).classList.remove("btn-secondary");
            }
        }
    }
})

document.getElementById("rem-element-queue").addEventListener("click", function () {

    let isqueue = queue.dequeue();
    document.getElementById("q"+queue.queueControl.length).innerHTML ="a";
    document.getElementById("q"+queue.queueControl.length).classList.remove("btn-primary");
    document.getElementById("q"+queue.queueControl.length).classList.add("btn-secondary");
    document.getElementById("alert-overflow-queue").classList.remove("overflow-show");
    document.getElementById("alert-overflow-queue").classList.add("overflow");
    if (isqueue === "Queue Underflow") {
        document.getElementById("alert-underflow-queue").classList.remove("underflow");
        document.getElementById("alert-underflow-queue").classList.add("underflow-show");
        console.log("underflow")
    } else {
        for (let i = queue.queueControl.length; i > 0; i--) {
            document.getElementById("q"+(i-1)).innerHTML = queue.queueControl[(i-1)];
        }    
    }
   
})