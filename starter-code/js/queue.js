const addQueue = document.getElementById("add_queue");
const remove_Queue = document.getElementById("remove_queue");
const queueList = document.getElementById("queueList");
const queue = new QueueDataStructure(10);

console.log(queue.MAX_SIZE)

console.log(queue)

// Handler

function queueCreate(){
    
    let toAddQueue = document.getElementById("input_queue").value || "default";
    let newDiv = document.createElement("div")
    newDiv.innerHTML = toAddQueue;
    newDiv.classList.add('dato')

    
    queue.enqueue(toAddQueue) ? queueList.append(newDiv) : alert(`queue Overflow : queue = ${queue.queueControl.length}, sorry dude`)
    
    console.log(queue.queueControl)

}

function queueRemove(){

    let to_delete = document.querySelector('.dato')
    queue.dequeue() ? queueList.removeChild(to_delete):alert(`queue Underflow : queue = ${queue.queueControl.length}, sorry dude`);

}

// onClick



addQueue.onclick = queueCreate;
remove_queue.onclick = queueRemove;

