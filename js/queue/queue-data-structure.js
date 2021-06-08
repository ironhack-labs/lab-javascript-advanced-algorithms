class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {

    if (this.queueControl.length < this.MAX_SIZE)

      return true

    else if (this.MAX_SIZE = 10)

      return false// ... your code goes here
  }

  isEmpty() {
   if (this.queueControl.length <= 0)
   
   return true
   
   if (this.queueControl.length > 0)
   
   return false// ... your code goes here
  }

  enqueue(item) {

    let error = new Error("QUEUE_OVERFLOW")

 if (this.canEnqueue() === false) {

        throw error}

    if (this.queueControl.push(item))

     
      return this.queueControl // ... your code goes here


  }

  dequeue() {
   
    let error = new Error("QUEUE_UNDERFLOW");

    let firstElement = this.queueControl[0]

if (this.isEmpty() === true){
   
  throw error;
   
   // ... your code goes here
  }

  return firstElement
    
  }

  display() {
    return this.queueControl
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
