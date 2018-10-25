function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = function(){
        return this.queueControl.length === 0
    };
    this.canEnqueue = function(){
        if(this.queueControl.length === this.MAX_SIZE){
            return false
        } else {
            return true;
        }

    };
    this.enqueue = function(queEl){
        if(this.queueControl.length === this.MAX_SIZE){
            return 'Queue Overflow';
        }else{
            this.queueControl.unshift(queEl);
            return this.queueControl;
        } 
    }
    this.dequeue = function(queEl){
        if(this.queueControl.length === 0){
            return 'Queue Underflow';
        }
        return this.queueControl.pop(queEl);
    }

}

let queue = new QueueDataStructure;