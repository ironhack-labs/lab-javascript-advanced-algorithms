var queue = new QueueDataStructure();
var input2 = document.getElementsByClassName('form-queue');
var btadd2 = document.getElementById('add-queue');
var bttake2 = document.getElementById('take-queue');
var list2 = document.getElementsByClassName('li-queue')
var conta3 = 1;
var conta4 = 0;
queue.MAX_SIZE=8;

//Adicionar ao Queue
btadd2.addEventListener('click', function () {
    if (queue.canEnqueue()==true){
        if (input2[0].value == ""){
               return console.log('erro');
        }
        else {
            queue.enqueue(input2[0].value);     
            list2[queue.MAX_SIZE - (queue.queueControl.length)].innerText = queue.queueControl[conta4]; 
            if (queue.queueControl.length<queue.MAX_SIZE){
            conta3 += 1;
            conta4 +=1;      
        }
    }
}
    else { 
        list2[queue.MAX_SIZE-conta].innerHTML = 'Queue Overflow'; 
    }
});

//Remover do Queue
bttake2.addEventListener('click', function () {
    // if (list2[queue.MAX_SIZE-conta3].innerHTML == 'Queue Overflow' ){
    //    return  list2[queue.MAX_SIZE-conta3].innerHTML = "";
    // }    
    if (conta3>0){
        queue.dequeue();     
        list2[( queue.queueControl.length - queue.MAX_SIZE )+8].innerHTML = ""; 
        conta3 -= 1;
        conta4 -=1;
    }
    if (conta3==0){
        list2[conta3].innerHTML = 'Queue Underflow';
        conta3 = 1;
        conta4 = 0;
        queue.dequeue();  
       return      
    } 
});