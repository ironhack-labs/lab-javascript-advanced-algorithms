function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = -1;

}


QueueDataStructure.prototype.isEmpty = function(){
    if(this.queueControl.length === 0){
        return true;
    }else{
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function(){
    if(this.queueControl.length === this.MAX_SIZE && (this.queueControl)){
        return false;
    }else{
        return true;
    }
}

QueueDataStructure.prototype.enqueue = function(element){
    
    if(!this.canEnqueue()){    
        return this.message("full");
    }

    this.queueControl.unshift(element);
    return this.queueControl;
    
}

QueueDataStructure.prototype.dequeue = function(){

    if(this.isEmpty()){    
        return this.message("empty");
    }
    return this.queueControl.pop();
}

QueueDataStructure.prototype.message = function(message){
    if(message === "full"){
        return "Queue Overflow";
    }else{
        return "Queue Underflow";
    }
   
}




