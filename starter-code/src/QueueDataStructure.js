
class QueueDataStructure {
  constructor() {
    this.queueControl = []
    this.MAX_SIZE = 3
  }

  enqueue(arg){
    if(this.canEnqueue()){
      this.queueControl.unshift(arg)
      return this.queueControl
    }else {
      return 'Queue Overflow'
    }

  }
  dequeue(){
    if(this.isEmpty()){
      return 'Queue Underflow'
    }else{
      return this.queueControl.pop()
    }
  }
  isEmpty(){
    if(this.queueControl.length<1){
    return true
  }else{
    return false
  }
  }

  canEnqueue(){
    if(this.queueControl.length<this.MAX_SIZE){
      return true
    }else{
      return false
    }
  }


}


queue = new QueueDataStructure
queue.enqueue(3,4)
