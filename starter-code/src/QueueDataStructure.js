function QueueDataStructure () {
    this.queueControl= [];
    this.MAX_SIZE= 5;
    this.isEmpty = function(){
        if( this.queueControl.length===0){
         return true
        } else {
            return false
        }
 
     };
     this.canEnqueue=function(){
      return this.queueControl.length!==this.MAX_SIZE
     };
     this.enqueue=function(valor){
        if (this.canEnqueue()){
            this.queueControl.unshift(valor);
            return this.queueControl }
            else {
                return 'Queue Overflow'
            }
            

     };
     this.dequeue=function(){
        if(this.isEmpty()===true){
            return 'Queue Underflow'
        }else {
            return this.queueControl.pop();
        }

     }



}
