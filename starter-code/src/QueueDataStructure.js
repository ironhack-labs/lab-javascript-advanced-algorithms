function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = () => {
        if (this.queueControl.length <= 0) {
            return true;
        } else {
            return false;
        }
    };
    this.canEnqueue = () => {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    };
    this.enqueue = (element) => {
        if(this.canEnqueue()){
            this.queueControl.unshift(element);
            return this.queueControl;
        } else{
            return 'Queue Overflow';
        }
    }
    this.dequeue = () =>{
        if(this.isEmpty()){
            return 'Queue Underflow';
        } else {
            return this.queueControl.pop();
        }
    }
}
