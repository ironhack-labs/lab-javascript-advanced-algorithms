/********************************
Stack
*********************************/
function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=8;
}

StackDataStructure.prototype.isEmpty = function() {
  if(this.stackControl.length === 0){
    return true;
  }else{
    return false;
  }
};

StackDataStructure.prototype.canPush = function() {
  if(this.stackControl.length < this.MAX_SIZE){
    return true;
  }else{
    return false;
  }
};

StackDataStructure.prototype.push = function(item) {
  if(this.canPush()){
    this.stackControl.push(item);
    return this.stackControl;
  }else{
    return 'Stack Overflow';
  }
};

StackDataStructure.prototype.pop = function() {
  if(this.isEmpty()){
    return 'Stack Underflow';
  }else{
    return this.stackControl.pop();
  }
};

/********************************
Queue
*********************************/
function QueueDataStructure(){
  this.queueControl= [];
  this.MAX_SIZE=8;
}

QueueDataStructure.prototype.isEmpty = function() {
  if(this.queueControl.length === 0){
    return true;
  }else{
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if(this.queueControl.length <= MAX_SIZE){
    return true;
  }else{
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function() {};

QueueDataStructure.prototype.dequeue = function() {};
