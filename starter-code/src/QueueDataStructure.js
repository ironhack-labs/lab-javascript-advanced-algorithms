function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 10

    this.isEmpty = function(){
        if (this.queueControl.length===0){
            return true}
         else {return false}
         }
     
     this.canEnqueue = function(){
     return (this.MAX_SIZE>this.queueControl.length)
     
    }
     
     this.enqueue = function(num){ 
 
         if (this.canEnqueue()){
 
         this.queueControl.unshift(num)
         return this.queueControl
         } else {
             return "Queue Overflow"
         }
         
     
     }
    this.dequeue = function(num){
 
       if (this.isEmpty()){
     return 'Queue Underflow' 
 
    } else {
 
       return this.queueControl.pop(num)
    }
 
 }}