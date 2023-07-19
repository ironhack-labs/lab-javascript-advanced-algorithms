// ---------- [INITIAL SETUP] ----------

class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  // ---------- [INITIAL SETUP] ----------

  // ---------- [COMPLETED] ------------

  canEnqueue() {
    // ... your code goes here

    if (this.queueControl.length === 0) {

      return true

    }

    if (this.queueControl.length === this.MAX_SIZE) {

      return false

    }

  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  isEmpty() {
    // ... your code goes here
    // ... your code goes here

    if (!this.queueControl.length) {

      return true

    }

    if (this.queueControl) {

      return false

    }

  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  enqueue(item) {
    // ... your code goes here

    if (this.queueControl.length < this.MAX_SIZE) {

      //console.log('we have space')

      this.queueControl.push(item)
      return this.queueControl

    } else {

      //throw new Error('QUEUE_OVERFLOW')

      return "Queue Overflow"

    }

  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  dequeue() {
    // ... your code goes here

    if (this.queueControl.length) {

      return this.queueControl.shift() //remove last item of array 

    } else {

      //throw new Error('QUEUE_UNDERFLOW')
      return "Queue Underflow"

    }
  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  display() {
    // ... your code goes here

    return this.queueControl

  }
}

// ---------- [COMPLETED] ------------

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
