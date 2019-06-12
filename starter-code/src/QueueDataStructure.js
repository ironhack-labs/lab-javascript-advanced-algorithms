function QueueDataStructure () {
    
    this.queueControl = [] 
    this.MAX_SIZE = 8
   

this.isEmpty = function (){
   
       return this.queueControl.length === 0
   }


this.canEnqueue =function(){
    return this.queueControl.length < this.MAX_SIZE
   
    }

   
this.enqueue = function (queueElement){
    if(this.canEnqueue()){
     this.queueControl.unshift(queueElement)
     return this.queueControl
    }
    else{
        return "Queue Overflow"
    }



}


this.dequeue=function(queueElement){
        if(this.isEmpty()){
            return "Queue Underflow"
        }
        else{
          return  this.queueControl.pop(queueElement)
        } 
}


}