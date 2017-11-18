//$(document).ready(function(){

function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.enqueueCounter = 0;
  this.dequeueCounter = 0;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0){
    return true;
  }
  else {
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length !== this.MAX_SIZE){
    return true;
  }
  else {
    return false;
  }
}

 QueueDataStructure.prototype.enqueue = function(element) {
  if(this.canEnqueue()){
    if(this.queueControl.length===0){
      this.enqueueCounter = 0;
      this.dequeueCounter = 0;
    }
    this.queueControl.unshift(element);
    var length = this.queueControl.length-1;
    var selector = "#q" + this.enqueueCounter;
    this.enqueueCounter++;
    $(selector).toggleClass("off").toggleClass("on");
    var input = $("#queue-input").val()
    console.log(input);
    $(selector).text(input);
    return this.queueControl
  }
  else {
    alert("Queue Overflow");
    return "Queue Overflow";
  }
 }



 QueueDataStructure.prototype.dequeue = function(element) {
  if(!this.isEmpty()){
    var firstAddition = this.queueControl.length-1
    var firstElement = this.dequeueCounter;
    var selector = "#q" + firstElement;
    console.log(selector);
    $(selector).toggleClass("off").toggleClass("on");
    $(selector).text("");
    this.dequeueCounter++;
    console.log(this.dequeueCounter);
    return this.queueControl[firstAddition];
  }
  else {
    alert("Queue Underflow");
    return "Queue Underflow";
  }
 }

 var queue; 

$(document).ready(function(){
  queue = new QueueDataStructure();
  $("#btn-queue-add").click(function(){
    console.log("press");
    var input = $("#stack-input").val();
    queue.enqueue(input);
  })

  $("#btn-queue-delete").click(function(){
    queue.dequeue();
    queue.queueControl.shift();
    console.log("press");
  }) 
 });