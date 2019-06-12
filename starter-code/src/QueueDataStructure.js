function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 8  



    this.isEmpty = function() { 
        return this.queueControl.length === 0
         }

    
    this.canEnqueue = function(){
        return this.queueControl.length < this.MAX_SIZE
    }

    this.enqueue = function(item){

        if (!this.canEnqueue()){
            return 'Queue Overflow'
        }else {
            this.queueControl.unshift(item)
            return this.queueControl 
        }
    }

    this.dequeue = function(item){
        if (this.isEmpty()){
            return 'Queue Underflow'

        }else {
            return this.queueControl.pop(item)
             
        }
    }
}
