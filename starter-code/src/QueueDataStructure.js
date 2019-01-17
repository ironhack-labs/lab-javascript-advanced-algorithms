function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 8;

    this.isEmpty = function(){
        if(this.queueControl.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    this.canEnqueue = function(){
        if(this.queueControl.length < this.MAX_SIZE){
            return true;
        }
        else{
            return false;
        }
    }

    this.enqueue = function(item){
        if(this.canEnqueue()){
            this.queueControl.unshift(item);
            return this.queueControl;
        }
        else{
            qflow = 1;
            return 'Queue Overflow';
        }
    }

    this.dequeue = function(item){
        if(!this.isEmpty()){
            return this.queueControl.pop();
        }
        else{
            qflow = 2;
            return 'Queue Underflow';
        }
    }
}
