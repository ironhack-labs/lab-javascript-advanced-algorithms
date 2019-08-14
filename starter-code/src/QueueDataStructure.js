function QueueDataStructure () {
    this.queueMin = 0 ;
    this.MAX_SIZE = 10;
    this.currentQueue = 0;
    this.queueControl=[];
}

QueueDataStructure.prototype.enqueue= function(content){
    if(this.currentQueue === this.MAX_SIZE){
        return "Queue Overflow";
    }
    if(this.currentQueue < this.MAX_SIZE){
    this.queueControl.push(content);
    this.currentQueue += 1 ; 
    return this.queueControl.reverse();
    
    }
    
}

QueueDataStructure.prototype.dequeue = function(){
if(this.currentQueue === this.queueMin){
    return "Queue Underflow";
}
if (this.currentQueue > this.queueMin){
    this.currentQueue -= 1;
    return this.queueControl.reverse().shift();
}
    
}

QueueDataStructure.prototype.isEmpty = function(){
    if(this.currentQueue === this.queueMin){
        return true;
}
return false;
}

QueueDataStructure.prototype.canEnqueue = function(){
    if(this.currentQueue === this.MAX_SIZE){
    return false;
}
return true;
}


export default QueueDataStructure;