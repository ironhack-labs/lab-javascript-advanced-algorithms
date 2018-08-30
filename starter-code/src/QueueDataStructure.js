class QueueDataStructure {
    constructor(){
      this.queueControl =[]
      this.MAX_SIZE = 8
    }
  
    isEmpty(){
      if(this.queueControl.length>0){
        return false
      }
      return true
    }
  
    canEnqueue(){
      if(this.queueControl.length<this.MAX_SIZE){
        return true
      }
      return false
    }
  
    enqueue(queAñadir){
      if(this.canEnqueue()){
        this.queueControl.unshift(queAñadir)
      }else{
        return 'Queue Overflow'
      }
      return this.queueControl
    }
  
    dequeue(){
      if(this.isEmpty()){
        return "Queue Underflow"
      }
      return this.queueControl[this.queueControl.length-1]
    }
  
  }
