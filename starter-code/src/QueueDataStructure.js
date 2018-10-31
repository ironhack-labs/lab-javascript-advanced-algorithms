function QueueDataStructure(){
    this.queueControl = [];
    this.MAX_SIZE = 10;
    
    QueueDataStructure.prototype.canEnqueue = function(){
        if (this.queueControl.length === this.MAX_SIZE){
            return false
        }
        else {
            return true
        }
     }
     QueueDataStructure.prototype.isEmpty = function(){
        if (this.queueControl.length === 0){
           return true
        }
        else{
            return false
        }
    }
   
    QueueDataStructure.prototype.canPush = function(){
        if (this.queueControl.length === this.MAX_SIZE){
            return false
        }
        else {
            return true
        }
     }
StackDataStructure.prototype.pop = function(remove){
        if (this.isEmpty() === false){
   
       return this.stackControl[this.stackControl.length - 1]
        }
        else{
        return "Stack Underflow"
        }
    }
    QueueDataStructure.prototype.enqueue = function(e){
        if (this.canPush() === true){
            this.queueControl.unshift(e)
            return this.queueControl;
        }
        else {
            return 'Queue Overflow'
        }
     }
     QueueDataStructure.prototype.dequeue = function(e){
        if (this.isEmpty() === false){
            this.queueControl.shift(e)
            return this.queueControl[0]
        }
        else{
            
            return  'Queue Underflow'
        }
     }
}
    queue = new QueueDataStructure();