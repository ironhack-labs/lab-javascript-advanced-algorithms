let queue = new QueueDataStructure();

let queueVal = document.querySelector('.queue input').value

let pos = 1

console.log(queueVal)


let qArrli = document.querySelectorAll('.queue li')

let qAddBut = document.querySelector('.queue.add')
console.log(qAddBut)

let qTakeBut = document.querySelector('.queue.take')
console.log(qAddBut)



qAddBut.addEventListener("click",()=>{
    if(queue.canEnqueue()){
        queueVal = document.querySelector('.queue input').value
        queue.enqueue(queueVal)
        qArrli[pos].className="full"
        qArrli[pos].innerText=queueVal
        pos++
        qArrli[0].innerText=""
        
    }else{
        qArrli[9].innerText=queue.enqueue(queueVal)
    }
})
qTakeBut.addEventListener("click",()=>{
    if(!queue.isEmpty()){
        queueVal = document.querySelector('.queue input').value
        pos--
        queue.dequeue()
        qArrli[pos].className="empty"
        qArrli[pos].innerText=""
        qArrli[9].innerText=""
    }else{
        qArrli[0].innerText=queue.dequeue()

    }  
})
