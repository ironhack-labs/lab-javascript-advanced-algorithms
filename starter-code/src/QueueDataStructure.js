
    class QueueDataStructure  {
        constructor() {
        this.queueControl = []
        this.MAX_SIZE = 6
        }
     
       isEmpty() {
       if(this.queueControl.length == 0) 
           {  return true
       }
            else   { 
                 return false
         }
     
          }
     


      canEnqueue() {
          if(this.queueControl.length >= this.MAX_SIZE) 
          {return false}
          
              {return true
          }
     }
     
      enqueue(a) {
        if(this.canEnqueue() == true) {
           this.queueControl.unshift(a)
           return this.queueControl
     
        }
        else {
            return "Queue Overflow"
        }
          
     
         }
     
      dequeue(a) {
     
         if(this.isEmpty() === true){
            return "Queue Underflow" 
         }
      else {
        this.queueControl.shift(a)
        return this.queueControl.pop()
           
      }
      
         
     
     
     
      }
     
     }
     



