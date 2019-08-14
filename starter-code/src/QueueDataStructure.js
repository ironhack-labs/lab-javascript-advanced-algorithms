function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length === 0) return true;
  else return false;
}

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length < this.MAX_SIZE){
    return true;
  }
  else {return false}
}

QueueDataStructure.prototype.enqueue = function(element){
  if(this.canEnqueue()){
    this.queueControl.push(element);
    this.queueControl.reverse();
    return this.queueControl;
  }
  else {return "Queue Overflow"}
}

QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length > 0){
    return this.queueControl.pop();
  }
  else {return "Queue Underflow"}
}

const queue = new QueueDataStructure({
  queueControl: [],
  MAX_SIZE: 5,
});

const input = document.getElementById("input-queue");
const btnAddQueue = document.querySelector(".addQueue");
const btnRemoveQueue = document.querySelector(".removeQueue");

btnAddQueue.onclick = function (){
   if (queue.canEnqueue()){
    document.querySelector(".queue:not(.is-active)").classList.add("is-active")
    const active = document.querySelectorAll(".queue.is-active");
    active[active.length-1].innerHTML = input.value;}
  else {window.alert("Queue Overflow")};
  queue.enqueue();
  console.log(queue.queueControl)
}

btnRemoveQueue.onclick = function (){
  if(!queue.canEnqueue()){
  document.querySelector(".container2 :last-child").classList.remove("is-active");
  document.querySelector(".container2 :last-child").innerHTML=""}
  else  if(queue.queueControl.length > 0){
    const active = document.querySelectorAll(".queue.is-active");
    active[active.length-1].classList.remove("is-active")
    active[active.length-1].innerHTML = "";}
  else {window.alert("Queue Underflow")};
  queue.dequeue()
  console.log(queue.queueControl)
}