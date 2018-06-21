
//seleccion de elementos para el listener
var queueInput = document.getElementById("queue-input").value;
var queueNuevo = document.getElementsByClassName('queue-element');
var queueBtn = document.getElementById('add-queue');
var parentQueue = document.getElementById('queue-div');
var queueOver = document.getElementById('overError');
var queueCounter = 0; //counter para que cambie el div donde se pondra el elemento

function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 10;
  
  var isEmpty = true
  this.isEmpty = function(){
    if(this.queueControl.length === 0){
      return isEmpty = true}else{
        return isEmpty = false;
      }
  };
  var canEnqueue = true;
  this.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE){
      return canEnqueue = true}else{
        return canEnqueue = false;
      }
    };

  this.enqueue = function(valorNuevo){
    this.canEnqueue();
      if(canEnqueue === true){
        this.queueControl.push(valorNuevo);
        queueNuevo[queueNuevo.length-1].parentNode.removeChild(queueNuevo[queueNuevo.length-1]); //quita ultimo div
        var queueDiv = document.createElement("div");
        queueDiv.className = "queue-element";
        queueDiv.innerHTML = valorNuevo;
        parentQueue.insertBefore(queueDiv, queueNuevo[queueCounter]); //pone un nuevo div al principio, luego en el 2 y asi...
        queueCounter++;
        return this.queueControl;
      };
    return 'Queue Overflow';
  }
  this.dequeue = function(){
    this.isEmpty();
    if(isEmpty === true){
      return 'Queue Underflow'
    };
    return this.queueControl.pop();
  }
}


var newQueue = new QueueDataStructure();

queueBtn.addEventListener('click', function(){
  var queueInput = document.getElementById("queue-input").value;
  newQueue.enqueue(queueInput);
});

/*        queueNuevo[queueNuevo.length-queueCounter].innerHTML = valorNuevo; //selector del div donde se pone el texto
        queueCounter++;*/