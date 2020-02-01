const $queueList = document.getElementById('queue-list');
const queueInput = document.getElementById('queue-input')
const $warningTopQueue = document.querySelector('#queue-container .warning-top');
const $warningBottomQueue = document.querySelector('#queue-container .warning-bottom');

// create stack instance, initialize DOM
const queue = new QueueDataStructure()

generateDomlistQueue();

// generate new HTML list

function generateDomlistQueue() {
    $warningTopQueue.style.display = 'none';
    $warningBottomQueue.style.display = 'none';
    $queueList.innerHTML = '';
    for (let i = 0; i < queue.MAX_SIZE; i++) {
        if (queue.queueControl[i] === undefined) {
            let listElement = document.createElement("LI");
            listElement.className = 'inactive';
            $queueList.appendChild(listElement);
        } else {
            let listElement = document.createElement("LI");
            listElement.className = 'active';
            let textListElement = document.createTextNode(queue.queueControl[i]);
            listElement.appendChild(textListElement);
            $queueList.appendChild(listElement);
        }
    }
}


// Generate warnings
function generateWarningQueue(type, message) {
    if (type === 'underflow') {
        $warningBottomQueue.style.display = 'block'
        $warningBottomQueue.innerText = message;
    } else if (type === 'overflow') {
        $warningTopQueue.style.display = 'block'
        $warningTopQueue.innerText = message;
    }
}



// Event listener for new queue input element
$container.addEventListener('click', function (e) {
    var valueQueueInput = queueInput.value;
    var target = e.target;

    if (target.id === 'add-queue' && valueQueueInput.length !== 0 && queue.canEnqueue()) {
        queue.enqueue(valueQueueInput)
        queueInput.value = '';
        generateDomlistQueue()
    } else if (target.id === 'add-queue' && valueQueueInput.length !== 0 && !queue.canEnqueue()) {
        generateWarningQueue('overflow', queue.enqueue())
        console.log('test overflow')
    } else if (target.id === 'add-queue' && valueQueueInput.length === 0) {
        alert('Need a value for input');
    } else if (target.id === 'take-queue' && !queue.isEmpty()) {
        queue.dequeue()
        generateDomlistQueue()
    } else if (target.id === 'take-queue' && queue.isEmpty()) {

        generateWarningQueue('underflow', queue.dequeue())
    }
})