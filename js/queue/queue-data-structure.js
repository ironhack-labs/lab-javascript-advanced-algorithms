class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {

    if (this.queueControl < this.MAX_SIZE) {
      return true
    } else if (this.queueControl = 10) {
      return false
    }
    //return ((this.queueControl < this.MAX_SIZE === true) && (this.queueControl = 0 === true)) //|| (this.queueControl >= 10 === false))
    //   if (this.queueControl < this.MAX_SIZE) {
    //     ///=== true && this.queueControl >= 10 === true)
    //     // ... your code goes here
    //   } else (this.queueControl >= 10)
    //   return false
    // } 
  }
  isEmpty() {

    return (this.queueControl = 0 === true || this.queueControl > 0 === false) //sorprendentemente se escribir esto y me resuelve mas problemas.
    // if (this.queueControl = 0) {
    //   return true
    // } else {
    //   return false //practicando
    // }
    // }                            /no funciona
    // if (this.queueControl > 0) {
    //   return false
    // }
    // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue) {
      this.queueControl.push(item)
    } else ("QUEUE_OVERFLOW")


    // ... your code goes here
  }

  dequeue() {
    // ... your code goes here array.splice(start, deleteCount)
    // Como no he sabido devolver los items restantes de los anteriores aquí no llego.
    if (this.queueControl >= 10) {
      this.queueControl.splice(0, 1)
      return this.queueControl //

    }


  }

  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
