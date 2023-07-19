class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }
  /*Es igual que con el STACK, pero con la excepción de DEQUEUE*/


  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  isEmpty() {
    if (this.queueControl.length > 0) {
      return false
    } else {
      return true
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      return 'Queue Overflow'
    }/* ponemos el del fichero del dom y lo cambiamos a return 
      porque si no, no salen los mensajes, aunque a jasmine esto no le gusta*/
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue underflow';/* ponemos el del fichero del dom porque si no, no salen los mensajes aunque a jasmine esto no le gusta*/
    } else {
      return this.queueControl.shift()
    }
  } /*OJO en este caso no es pop, porque no es al final, ya que al ser una fila es AL PRINCIPIO: SHIFT*/

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
