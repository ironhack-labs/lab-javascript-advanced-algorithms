class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }   /*conidicionales, TRUE si el Stack está lleno, FALSE si está vacio. ¿Quien nos dice
      que está lleno? -> cuando el stack control es igual al máximo de capacidad, es 
      decir, es igual a MAx_SIZE:*/


  isEmpty() {
    if (this.stackControl.length > 0) {
      return false
    } else {
      return true
    }
  }   /*¿Cuándo es falso el stack?, cuando hay algún elemento, y ¿cuándo hay algún elemento?
      cuando su length es mayor que cero, y luego cualquier otra cosa es verdadera, es decir, 
      cuando está vacio.*/


  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return 'Stack Overflow'; /* ponemos el del fichero del dom porque si no, no salen los mensajes*/
    }
  }   /*SI can push es verdadero se tiene que añadir EL ITEM al STACK stackControl y eso es hace con PUSH SI 
      es FALSO devuelve un mensaje, es decir un string porque tenemos que escribirlo nosotros.*/


  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow'; /* ponemos el del fichero del dom porque si no, no salen los mensajes*/
    } else {
      return this.stackControl.pop()
    }
  }   /*¿Cuándo es isEmpty verdadero? -> cuando es igual o mayor a cero no hay nada, si eso
      se cumple, devuelve el mensaje de que hay un herror. Si no, tiene que devolver el 
      último elemento del Array, y ese es el método POP*/



  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
