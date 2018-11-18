//Aguas: en Stack el inicio de la cola está al INICIO de stackControl
function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function () {
    return (this.stackControl.length === 0) ? true : false;
  }
  this.canPush = function() {
    return (this.stackControl.length >= this.MAX_SIZE) ? false : true;
  }
  this.push = function (arg) {
    if (this.canPush()) {
      this.stackControl.push(arg); //Mete y no retorna
      return this.stackControl;
    }
    else return "Stack Overflow";
  }
  this.pop = function() {
    return (this.isEmpty()) ? "Stack Underflow" : // Si está vacío
    this.stackControl.pop(); //Saca y retorna, aguas con el elemento
  }
}
