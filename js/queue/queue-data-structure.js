class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here


      if (this.MAX_SIZE <= this.queueControl.length) {
        return false;
      } else {

        return true
      }

  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length == 0) {

      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if ( this.queueControl.length>= this.MAX_SIZE ) {
      return 'Queue Overflow'
    } else {

      this.queueControl.unshift(item)

      return this.queueControl
    }

  }

  dequeue() {
    // ... your code goes here
    return this.queueControl[this.queueControl.length - 1  ]
  }
}

let test = new QueueDataStructure
// test.MAX_SIZE = 1;
console.log(test.enqueue(19));
console.log(test.enqueue(88));
console.log(test.dequeue());
