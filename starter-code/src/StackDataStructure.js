function StackDataStructure () {

  this.stackControl = [];
  this.MAX_SIZE = 9;

}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0){
    return true;
  }
    return false;
}

StackDataStructure.prototype.canPush = function(element) {
  
  if (this.stackControl.length <= this.MAX_SIZE ){
    this.push(element);
    return true;
  }
  else {
    return false;
  }
}

StackDataStructure.prototype.push = function(element) {
  
  if (this.stackControl.length < this.MAX_SIZE){
    this.stackControl.push(element);
    return this.stackControl;
  }
  else {
    this.stackControl.push('Stack Overflow');
    return 'Stack Overflow';
  }
}

StackDataStructure.prototype.pop = function() {

  if (this.stackControl.length > 1){
    return this.stackControl.pop();
  }
  else {
    return ('Stack Underflow');
  }
}

