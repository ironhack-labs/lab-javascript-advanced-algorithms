function QueueDataStructure () {
   this.queueControl = [];
   this.MAX_SIZE = 16;
}

QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl == 0;
}

QueueDataStructure.prototype.canEnqueue = function(){

    if(this.queueControl <= this.MAX_SIZE){
        return true;
    }else{
        //this.queueControl.unshift(element)
        return false;
    }
}

QueueDataStructure.prototype.enqueue = function(element){


    if(this.queueControl.length >= this.MAX_SIZE){
        
        return 'Queue Overflow';
    }else{
        this.queueControl.unshift(element);
        return this.queueControl;
    }
        

    
}

QueueDataStructure.prototype.dequeue = function(){
    if(this.queueControl <= 0){
        return 'Queue Underflow';
    }else{
        return this.queueControl.pop();
    }
}