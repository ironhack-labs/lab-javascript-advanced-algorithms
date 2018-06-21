
//seleccion de elementos para el listener
var stackInput = document.getElementById("stackelement").value;
var stackNuevo = document.getElementsByClassName('stack-element');
var addBtn = document.getElementById('add-stack');
var parent = document.getElementById('stack-div');
var delBtn = document.getElementById('delete-stack');


function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  
  var isEmpty = true
  this.isEmpty = function(){
    if(this.stackControl.length === 0){
      return isEmpty = true}else{
        return isEmpty = false;
      }
  };
  var canPush = true;
  this.canPush = function(){
    if(this.stackControl.length < this.MAX_SIZE){
      return canPush = true}else{
        return canPush = false;
      }
    };

  this.push = function(valorNuevo){
    this.canPush();
      if(canPush === true){
        this.stackControl.push(valorNuevo);
        stackNuevo[0].parentNode.removeChild(stackNuevo[0]); //quita el primer div
        var newDiv = document.createElement("div");
        newDiv.className = "stack-element";
        newDiv.innerHTML = valorNuevo;
        parent.appendChild(newDiv); //pone un nuevo div al final
        return this.stackControl;
      };
    return 'Stack Overflow';
  }
  this.pop = function(){
    this.isEmpty();
    if(isEmpty === true){
      return 'Stack Underflow'
    };
    return this.stackControl.pop();
    stackNuevo[stackNuevo.length-1].parentNode.removeChild(stackNuevo[stackNuevo.length-1]) //quita ultimo div
    var emptyStack = document.createElement('div');
    emptyStack.className = "stack-element";
    parent.insertBefore(emptyStack, stackNuevo[0]); //añade un nuevo div vacio al principio. No funciona
  }
}

var newStack = new StackDataStructure();

addBtn.addEventListener('click', function(){
  var stackInput = document.getElementById("stackelement").value;
  newStack.push(stackInput);
});

delBtn.addEventListener('click', function(){
  newStack.pop();  //no funciona
});

/*falto hacer que funcione el remove, poner un setListeners para "recargarlos" y hacer que el
input se borre despues de añadir un nuevo stack*/