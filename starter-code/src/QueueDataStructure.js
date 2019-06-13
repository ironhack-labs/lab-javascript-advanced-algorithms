class QueueDataStructure {
  constructor() {
  this.queueControl =[]
  this.MAX_SIZE = 8
}

 isEmpty = function() {
    return this.queueControl.length === 0
  } 

 canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE
  } 

enqueue = function(item){

    if (!this.canEnqueue()) { 
    return  'Queue Overflow'
  } else {
    this.queueControl.unshift(item)
    return this.queueControl
  }  
  } 

 dequeue = function(element) {

    if (this.isEmpty()){ 
      return  'Queue Underflow'
    } else{
     return this.queueControl.pop(element)
    } 
  } 

}
