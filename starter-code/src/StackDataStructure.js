function StackDataStructure () {

    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.items = 0;
  }

StackDataStructure.prototype.isEmpty = function () {
  if(this.items < 1){
    return true;
  }
  return false;
}

StackDataStructure.prototype.canPush = function () {
  if(this.items < this.MAX_SIZE){
    return true;
  }
  return false;
}


StackDataStructure.prototype.push = function (e) {
  this.stackControl.push(e)
  this.items = this.stackControl.length;

  if(this.items > this.MAX_SIZE){ return 'Stack Overflow' }
  
  return this.stackControl
}

StackDataStructure.prototype.pop = function () {
  let willBePopped = this.stackControl[this.stackControl.length - 1];
  this.stackControl.pop()
  this.items = this.stackControl.length;

  if(this.items < 1){ return 'Stack Underflow' }

  return willBePopped;
}

