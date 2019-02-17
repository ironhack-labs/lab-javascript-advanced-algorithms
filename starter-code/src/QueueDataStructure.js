function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 7;
}

QueueDataStructure.prototype.isEmpty = function (){
    if (this.queueControl.length === 0){
        return true
    }
    else{
        return false
    }
  }

  QueueDataStructure.prototype.canEnqueue = function (){
    if (this.queueControl.length < this.MAX_SIZE){
        return true
    }
    else if (this.queueControl.length === this.MAX_SIZE){
        return false
    }
  }

  QueueDataStructure.prototype.enqueue = function (s){
    if (this.canEnqueue()){
    this.queueControl.unshift(s);
    return this.queueControl}
     else {
         return ('Queue Overflow')
     }
}


QueueDataStructure.prototype.dequeue = function (){
    if (this.isEmpty()){
        return "Queue Underflow"
    }
        return this.queueControl.pop()
}
