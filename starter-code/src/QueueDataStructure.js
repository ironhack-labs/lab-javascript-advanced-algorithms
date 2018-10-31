function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
    
    this.isEmpty = function(){

        if(this.queueControl.length === 0){
            return true;
        } else {return false;}
    

    }
    
    this.canEnqueue = function(){
        if(this.queueControl.length < this.MAX_SIZE){
            return true;
        }
        return false;

    }

    this.enqueue = function(stackItem){
        if(this.canEnqueue()){
            this.queueControl.unshift(stackItem);
            return this.queueControl;
        }else{
            return "Queue Overflow";
        }
    }

    this.dequeue = function(){
        var popIntoArray = [];
        if(this.isEmpty()){
            return "Queue Underflow";
        }
        return this.queueControl.pop();

    }
}

