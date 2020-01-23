let queue = new QueueDataStructure();

let queueVal = document.querySelector('.queue input').value


console.log(queueVal)


let qArrli = document.querySelectorAll('.queue li')
let fullLi = document.querySelectorAll('.full')

let pos = 1
let delpos = 1

let qAddBut = document.querySelector('.queue.add')
console.log(qAddBut)

let qTakeBut = document.querySelector('.queue.take')
console.log(qAddBut)



qAddBut.addEventListener("click",()=>{
    delpos=1
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
    
    console.log(delpos)

    if(!queue.isEmpty()){
        queueVal = document.querySelector('.queue input').value
        pos--
        queue.dequeue()
        qArrli[delpos].className="empty"
        qArrli[delpos].innerText=""
        qArrli[9].innerText=""
        delpos++
    }else{
        qArrli[0].innerText=queue.dequeue()

    }  
})
