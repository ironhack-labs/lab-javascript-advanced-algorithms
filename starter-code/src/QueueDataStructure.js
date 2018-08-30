class QueueDataStructure {
  constructor(){
    this.queueControl= [],
    this.MAX_SIZE = 8
  }
  //function isEmpty
  isEmpty(){
    if(this.queueControl.length>0){
      return false
    }else{
      return true
    }
  }
  //function canEnqueue
  canEnqueue(){
    if(this.queueControl.length<this.MAX_SIZE){
      return true
    }else{
      return false
    }
  }
  //function enqueue
  enqueue(e){
    if(this.canEnqueue()){
      this.queueControl.unshift(e);
      return this.queueControl;
    }else{
      return "Queue Overflow";
    }
  }
  //function dequeue
  dequeue(){
    if(this.isEmpty()){
      return "Queue Underflow"
    }
    return this.queueControl.shift()
  }
}
  var queue = new QueueDataStructure();