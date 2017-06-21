//El objetivo es añadir elementos a una pila.
//LIFO --> Last in First out.
//Evita StackOverfFlow(+MaxLength) y StackUnderFlow(-Length=0)
//Tipo pila con metodos por Prototype.

function StackDataStructure (){
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

//Añadir elementos a la pila

StackDataStructure.prototype.canPush = function (){
  if (this.stackControl.length < this.MAX_SIZE){
    return true;
  }
  else {
    return false;
  }
};

//Eliminar elementos de la pila

StackDataStructure.prototype.isEmpty = function (){
  if (this.stackControl.length === 0){
    return true;
  }
  else {
    return false;
  }
};

StackDataStructure.prototype.push = function(a){
  var answer;
  if(this.canPush() === true){
    this.stackControl.push(a);
    answer = this.stackControl;
  } else {
    answer = 'Stack Overflow';
  }
  return answer;
};

StackDataStructure.prototype.pop = function(){
  var answer;
  if(this.isEmpty() === true){
    answer = 'Stack Underflow';
  } else {
    answer= this.stackControl.pop();
  }
  return answer;
};
