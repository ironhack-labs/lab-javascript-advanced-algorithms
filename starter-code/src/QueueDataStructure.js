
function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;

    this.isEmpty = function(){
        if(this.queueControl.length > 0){
            return false;
        } else {
            return true;
        }
    }
    this.canEnqueue = function(){
        if(this.queueControl.length < this.MAX_SIZE){
         return true   
        } else{
            return false
        }
    }

    this.enqueue = function(numero){
        if (this.canEnqueue()){
            this.queueControl.unshift(numero);
            return this.queueControl;
        }else{
            return "Queue Overflow";
        }
        
        
    }
    this.dequeue = function(){

        if (this.isEmpty()){
            return "Queue Underflow"
        } else{
            return this.queueControl[this.queueControl.length - 1];
        }
        
    }
}
