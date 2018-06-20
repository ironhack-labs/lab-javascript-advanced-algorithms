function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function () {
        if (this.queueControl.length == 0) {
            return true;
        } else {
            return false;
        }
    };
    this.canEnqueue = function () {
        if (this.queueControl.length == this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    };
    this.enqueue=function(element){
        if (this.canEnqueue()){
            this.queueControl.unshift(element);
            return this.queueControl;
        }else{
            return "Queue Overflow";
        }
    }
    this.dequeue=function(){
        if (this.isEmpty()){
            return 'Queue Underflow';
        }else{
            return this.queueControl.pop();
        }
    }
}
