const queue = new QueueDataStructure ();
const addBtnQueue = document.querySelector ('#addBtnQueue');
const takeBtnQueue = document.querySelector ('#takeBtnQueue');

addBtnQueue.onclick = () => {
    let element = document.querySelector ('#input-queue').value;
    if  (queue.canEnqueue ()){
        queue.enqueue(element);
        console.log (element);
        for (let i = 0; i < queue.queueControl.length; i ++) {
            document.querySelector (`#queueElem-${i}`).innerHTML = queue.queueControl[i];
        }
    }
    else {
        window.alert(queue.enqueue(element));
    }
}

takeBtnQueue.onclick = () => {
    if (queue.isEmpty()) {
        window.alert(queue.dequeue());
    }
    else {
        queue.dequeue();
        for (let i = 0; i < queue.queueControl.length; i ++) {
        document.querySelector (`#queueElem-${i}`).innerHTML = queue.queueControl[i];
        }
        for (let i =  queue.queueControl.length; i < queue.MAX_SIZE; i ++ ) {
            document.querySelector(`#queueElem-${i}`).innerHTML = " ";
        }
    }
}