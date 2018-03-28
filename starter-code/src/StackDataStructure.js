function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 9;
}
//metodo para saber si el contenedor esta vacío o lleno
StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
};
//método para saber si puedo meter más o no en el contenedor
StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};
//método para poner
StackDataStructure.prototype.push = function(val) {
  if (this.canPush()) {
    this.stackControl.push(val);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};
//método para quitar
StackDataStructure.prototype.pop = function() {
  if (!this.isEmpty()) {
    return this.stackControl.pop();
  } else {
    return "Stack Underflow";
  }
};
