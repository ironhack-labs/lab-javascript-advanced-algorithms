class StackDataStructure {
  constructor() {
    this.stackControl = []; //Array que almacena con push y elimina con POP
    this.MAX_SIZE = 10; // El número de elementos que puede haber
  }

  canPush() {

    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }

  }

  display() {

    return this.stackControl
  }

  isEmpty() {

    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {

    let xxxx = document.querySelectorAll('li')

    xxxx.forEach(elm => {
      elm.style.background = 'blue'
      elm.innerText = 'Este texto no es el incial :3'
    })


    if (this.canPush()) {
      this.stackControl.push(item) //<=//Debe de incrementar un elemento
    } else {
      return 'Stack Overflow'
    }
    return this.display()
  }

  pop() {

    if (this.isEmpty()) {
      return 'Stack Underflow'
    } else {
      return this.stackControl.pop() // Debe eliminar un elemento
    }

    return this.display()
  }
}