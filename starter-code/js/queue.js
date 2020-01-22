let btnQueue1 = document.getElementById('queueAdd');
let btnQueue2 = document.getElementById('queueTake');
let dataQueue = new QueueDataStructure()




btnQueue1.addEventListener('click', function () {
    let elm = document.getElementById("input2").value;
    let elmQueue = dataQueue.enqueue(elm)
    let queues = document.getElementsByClassName("qu")
    queues = [...queues]
    for (let i = 0; i < elmQueue.length; i++) {
        const element = queues[i];
        element.innerHTML = elmQueue[i]
        element.style.backgroundColor = '#cbe7ef';

    }


})

btnQueue2.addEventListener('click', function () {

})

















btnQueue1.addEventListener('click', function () {

})

btnQueue2.addEventListener('click', function () {

})