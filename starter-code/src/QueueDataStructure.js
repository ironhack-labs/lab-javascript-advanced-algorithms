function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 6

        this.isEmpty = function(){
            if (this.queueControl.length == 0) {
                return true
            } else return false
        }

        this.canEnqueue = function (){
            if (this.queueControl.length < this.MAX_SIZE) return true
            return false;
        }

        this.dequeue = function (){
            if(this.queueControl.length == 0) return "Queue Underflow"
            return this.queueControl.pop();
        }

        this.enqueue = function(element){
            if(this.queueControl.length >= this.MAX_SIZE) return "Queue Overflow"
            else {
                this.queueControl.unshift(element);
                return this.queueControl
            }

        }
}

