
class QueueDataStructure {
  constructor() {
    this.queueControl = []
    this.MAX_SIZE = 3
  }

  enqueue(arg){
    if(this.canQueue()){
      this.queueControl.unshift(arg)
      return this.queueControl
    }else {
      return 'Stack Overflow'
    }

  }
  dequeue(){
    if(this.isEmpty()){
      return 'Stack Undeflow'
    }else{
      return this.queueControl.shift()
    }
  }
  isEmpty(){
    if(this.queueControl.length<1){
    return true
  }else{
    return false
  }
  }

  canQueue(){
    if(this.queueControl.length<this.MAX_SIZE){
      return true
    }else{
      return false
    }
  }


}


queue = new QueueDataStructure
queue.enqueue(3,4)
