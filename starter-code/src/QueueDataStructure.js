function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 0;

    this.isEmpty = function (){
        if (this.queueControl.length == 0){
            return true;
        } else {
            return false;
        }
    };

    this.canEnqueue = function (){
        if (this.MAX_SIZE > this.queueControl.length){
            return false;
        }

        return true;

    };

    this.enqueue = function (num){
        
        if (this.MAX_SIZE > this.queueControl.length){
            return 'Queue Overflow';
        } else {
            this.queueControl.unshift(num);
            return this.queueControl;
        }
    };

    this.dequeue = function (){

        if (this.queueControl.length === 0){
            return 'Queue Underflow';
        }
        return this.queueControl.pop();

    };
}   