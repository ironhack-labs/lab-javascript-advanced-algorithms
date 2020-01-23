let stack = new StackDataStructure();

let stackVal = document.querySelector('.stack input').value

let spos = 1

console.log(stackVal)

let sArrli = document.querySelectorAll('.stack li')



let sAddBut = document.querySelector('.stack.add')
console.log(sAddBut)

let sTakeBut = document.querySelector('.stack.take')
console.log(sTakeBut)

sAddBut.addEventListener("click",()=>{
    // console.log('funciono')
    if(stack.canPush()){
        stackVal = document.querySelector('.stack input').value
        stack.push(queueVal)
        sArrli[spos].className="full"
        sArrli[spos].innerText=stackVal
        spos++
        sArrli[0].innerText=""
    }else{
        sArrli[9].innerText=stack.push(stackVal)

    }

})

sTakeBut.addEventListener("click",()=>{
    // console.log('funciono')
    if(!stack.isEmpty()){
        stackVal = document.querySelector('.stack input').value
        spos--
        stack.pop()
        sArrli[spos].className="empty"
        sArrli[spos].innerText=""
        sArrli[9].innerText=""
    }else{
        sArrli[0].innerText=stack.pop()

    } 
})

/* 

qAddBut.addEventListener("click",()=>{
    if(stack.canEnqueue()){
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
*/