
var queueAddBtn = document.getElementById('queueAdd');
var queueTakeBtn = document.getElementById('queueTake');
var queueInput = document.getElementById('queueInput');
var queueContainer = document.getElementById('queue-item-container')

var queue = new QueueDataStructure();

function printQueue(arr){
    if(arr == "Queue Overflow"){
        printInPosition(arr, 8, queueContainer)
    } else if (arr.length == 0) {
        clearContainer(queueContainer);
        printInPosition("Queue Underflow", 8, queueContainer);
    } else {
        clearContainer(queueContainer);
        arr.forEach(function(element, i) {
            printInPosition(element, i,queueContainer);
        });
    }
}

queueAddBtn.addEventListener('click', function(){
    var inputText = queueInput.value;
    var queueArr = queue.enqueue(inputText);
    queueInput.value = "";

    printQueue(queueArr);
});

queueTakeBtn.addEventListener('click', function(){
    var elemRemoved = window.queue.dequeue();
    var queue = window.queue.queueControl;

    printQueue(queue);
})