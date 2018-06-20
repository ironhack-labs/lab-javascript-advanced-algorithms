

function QueueDataStructure () {

    this.queueControl = [];
    this.MAX_SIZE = 8;
}



QueueDataStructure.prototype.isEmpty = function(){

    if (this.queueControl.length == 0){
        return true 
    }else {
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function(){

    if (this.queueControl.length < this.MAX_SIZE){

        return true
    }else{
        return false
    }}


    QueueDataStructure.prototype.enqueue = function(e){

        if (this.queueControl.length >=  this.MAX_SIZE){
            return 'Queue Overflow'
        }else {
            this.queueControl.unshift(e)
            return this.queueControl;
        }
    }  

    QueueDataStructure.prototype.dequeue = function(e){
        
        var last = this.queueControl[this.queueControl.length -1]
        
         if (!this.isEmpty()){    
            this.queueControl.pop(e)
            return last 
         }else {
             return 'Queue Underflow'
         }
    }
