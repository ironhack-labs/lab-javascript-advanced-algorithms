// create new data stucture
//



function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 20;
}

//CHECKS IF THE QUEUE IS EMPTY
QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length > 0) {
    return false;
  }
  else {
    return true;
  }
};

//CHECKS IF YOU CAN ADD SOMETHING TO THE QUEUE / IF THE QUEUE IS FULL
QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length === this.MAX_SIZE){
    return false;
  }
  else {
    return true;
  }
};

//ADDS THE NEW ELEMENT TO THE BEGINNING OF THE ARRAY
QueueDataStructure.prototype.enqueue = function(i) {
  console.log(i);
  this.queueControl.push(i);
  console.log(this.queueControl);
  if (this.queueControl.length > this.MAX_SIZE) {
    return "Queue Overflow";
  }
  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length < 1) {
    return "Queue Underflow";
  }
  else {
    return this.queueControl[this.queueControl.length - 1];
  }
};



$( document ).ready(function() {

  var newQueue = new QueueDataStructure();

  $('#queue-add').click(function(){
    if (newQueue.canEnqueue() === true) {
      newQueue.enqueue($('#queue-input').val());
      $('.queue-wrapper').append('<div class="bar"></div>');
    }
    console.log(QueueDataStructure.queControl);

  });

});
