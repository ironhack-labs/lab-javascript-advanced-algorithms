function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 19;
}

QueueDataStructure.prototype.isEmpty = function (){
    if (this.queueControl.length === 0) {
    return true;
    } else {
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function (){
    if (this.queueControl.length === this.MAX_SIZE) {
    return false;
    } else {
        return true;
    }
}

QueueDataStructure.prototype.enqueue = function (elem){
    if (this.canEnqueue()) {
        this.queueControl.unshift(elem);
        return this.queueControl;
    }
    else {
        return "Queue Overflow";
    } 
}

QueueDataStructure.prototype.dequeue = function (elem){
    
 if (this.isEmpty()) {
     return "Queue Underflow";
 }
     else {
         return this.queueControl.pop();
     }
 }

//  const queue = new QueueDataStructure() 

//  queue.enqueue(19)
//  console.log("step 1", queue.queueControl)
//  queue.enqueue(88)
//  console.log("step 2", queue.queueControl)
//  queue.dequeue()
//  console.log("step 3 pop", queue.queueControl)
