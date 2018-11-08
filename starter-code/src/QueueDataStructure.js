class QueueDataStructure  {
    constructor(){
    this.queue = []
    this.MAX_SIZE = 8
    }
    push (elementoameter){
      if (this.isEmpty()){
        this.queue.push(elementoameter)
      }else if (!this.isFull()){
        this.queue.push(elementoameter)
      }else return 'Queue Overflow' 
      
    }
  
    pop  (){
      if(this.isFull()){
        this.queue.shift()
        }
      else if(!this.isEmpty()){
          this.queue.shift()
        }
      else return 'Queue Underflow'
    }
  
    isEmpty (){
        if(queue.length === 0)
            return true
        else
            return false
    }
    isFull (){
        if(this.queue.length < this.MAX_SIZE)
          return false
        else 
          return true 
    }
  }
  
  
  