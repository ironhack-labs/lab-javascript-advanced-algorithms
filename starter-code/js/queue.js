var queue = new QueueDataStructure ();
var addButtomQueue = document.querySelector('#addButtonQueue');
var takeButtomQueue = document.querySelector('#takeButtonQueue');
;

addButtonQueue.onclick = () => {
    var datos = document.querySelector('#inputQueue').value;
    if (queue.canEnqueue()){
        queue.enqueue(datos);
        console.log(datos);
        for (var i = 0; i < queue.queueControl.length; i++){
            document.querySelector(`#elemQueue-${i}`).innerHTML = queue.queueControl[i];
        }    
    }
    else window.alert(queue.enqueue(datos))
}
takeButtonQueue.onclick = () => {
    console.log("entra en click")
    if (queue.isEmpty()) window.alert(queue.dequeue());
    else {
        queue.dequeue();
        for (var i = 0; i < queue.queueControl.length; i++){
            document.querySelector(`#elemQueue-${i}`).innerHTML = queue.queueControl[i];
        }
        for (var i = queue.queueControl.length; i < queue.MAX_SIZE; i++){
            document.querySelector(`#elemQueue-${i}`).innerHTML = " ";
        }
    }
}